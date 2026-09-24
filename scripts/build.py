"""Ham leaderboard verisinden model ailelerinin sürüm ortalamalarını hesaplar.

Her sürümün tüm efor seçenekleri (low / medium / high / xhigh / max,
thinking 1K..64K vb.) tek bir noktaya indirgenir: skorların aritmetik ortalaması.
Min / max ve tek tek seçenekler de saklanır.

Çıktı: data/arc_trend.json + data/arc_trend.js (index.html file:// ile açılsın diye)
"""
import collections
import datetime
import json
import pathlib
import re
import statistics

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"

BENCHMARKS = [
    ("v1_Semi_Private", "ARC-AGI-1"),
    ("v2_Semi_Private", "ARC-AGI-2"),
    ("v3_Semi_Private", "ARC-AGI-3"),
]
# ARC-AGI-3'te leaderboard görev başı değil koşunun toplam maliyetini veriyor (`cost` alanı)
RUN_COST = {"v3_Semi_Private"}

# Aile = grafikte tek çizgi. Sürümler kronolojik sırada; modelId regex ile eşleşir.
# Aynı sağlayıcının aileleri renk paylaşır, sırası çizgi desenini belirler (0 = düz).
# "featured" aileler "Amiral modeller" ön ayarına girer.
FAMILIES = [
    {"id": "opus", "name": "Claude Opus", "provider": "Anthropic", "prefix": "Opus ", "featured": True, "versions": [
        ("4", r"^claude-opus-4-20250514"),
        ("4.5", r"^claude-opus-4-5-"),
        ("4.6", r"^(claude|anthropic)-opus-4-6-"),
        # v1/v2'de "Claude 4.7", v3'te "Opus 4.7" adıyla geçiyor — aynı model
        ("4.7", r"^(claude-4-7-|anthropic-opus-4-7-)"),
        ("4.8", r"^anthropic-opus-4-8-"),
        ("5", r"^anthropic-claude-opus-5-(?!5-)"),
        ("5.5", r"^anthropic-claude-opus-5-5-"),
    ]},
    {"id": "sonnet", "name": "Claude Sonnet", "provider": "Anthropic", "prefix": "Sonnet ", "versions": [
        ("3.7", r"^Claude 3\.7"),
        ("4", r"^claude-sonnet-4-20250514"),
        ("4.5", r"^claude-sonnet-4-5-"),
        ("4.6", r"^claude_sonnet_4_6_"),
    ]},
    {"id": "fable", "name": "Claude Fable", "provider": "Anthropic", "prefix": "Fable ", "versions": [
        ("5", r"^anthropic-claude-fable-5-(?!1-)"),
        ("5.1", r"^anthropic-claude-fable-5-1-"),
    ]},
    {"id": "haiku", "name": "Claude Haiku", "provider": "Anthropic", "prefix": "Haiku ", "versions": [
        ("4.5", r"^claude-haiku-4-5-"),
    ]},
    # 5.6'dan sonra OpenAI kademelere ayrıldı; amiral hattı en üst kademeyle (Sol → Astra) devam eder.
    {"id": "gpt", "name": "GPT", "provider": "OpenAI", "prefix": "GPT-", "featured": True, "versions": [
        ("5", r"^gpt-5-2025-08-07-"),
        ("5.1", r"^gpt-5-1-2025-11-13-"),
        ("5.2", r"^gpt-5-2-2025-12-11-thinking-"),
        ("5.4", r"^(gpt-5-4-(none|low|medium|high|xhigh)$|openai-gpt-5-4-2026)"),
        ("5.5", r"^(gpt-5-5-2026-04-22-thinking-|openai-gpt-5-5-2026-04-23-)"),
        ("5.6 Sol", r"^openai-gpt-5-6-sol-"),
        ("6 Astra", r"^openai-gpt-6-astra-(?!.*provider-adapter)"),
    ]},
    {"id": "gpt-pro", "name": "GPT Pro", "provider": "OpenAI", "prefix": "GPT-", "versions": [
        ("5 Pro", r"^gpt-5-pro-"),
        ("5.2 Pro", r"^gpt-5-2-pro-"),
        ("5.4 Pro", r"^gpt-5-4-pro-"),
        ("5.5 Pro", r"^gpt-5-5-pro-"),
    ]},
    {"id": "gpt-luna", "name": "GPT Luna", "provider": "OpenAI", "prefix": "GPT-", "versions": [
        ("5.6 Luna", r"^openai-gpt-5-6-luna-(none|low|medium|high|xhigh|max)$"),
        ("5.6 Luna (30.07)", r"^openai-gpt-5-6-luna-.*-2026-07-30$"),
        ("6 Luna", r"^openai-gpt-6-luna-(?!.*provider-adapter)"),
    ]},
    {"id": "gpt-mini", "name": "GPT mini", "provider": "OpenAI", "prefix": "GPT-", "versions": [
        ("5 mini", r"^gpt-5-mini-"),
        ("5.4 mini", r"^gpt-5-4-mini-"),
    ]},
    {"id": "gemini-pro", "name": "Gemini Pro", "provider": "Google", "prefix": "Gemini ", "featured": True, "versions": [
        ("2.5 Pro", r"^gemini-2-5-pro-"),
        ("3 Pro", r"^gemini-3-pro-preview$"),
        ("3.1 Pro", r"^(google-)?gemini-3-1-pro-preview$"),
    ]},
    {"id": "gemini-flash", "name": "Gemini Flash", "provider": "Google", "prefix": "Gemini ", "versions": [
        ("2.0 Flash", r"^Gemini 2\.0 Flash$"),
        ("2.5 Flash", r"^gemini-2-5-flash-preview-05-20"),
        ("3 Flash", r"^gemini-3-flash-preview-thinking-"),
        ("3.5 Flash", r"^gemini-3-5-flash-(?!lite)"),
        ("3.6 Flash", r"^gemini-3-6-flash-"),
        ("3.7 Flash", r"^google-gemini-3-7-flash-"),
    ]},
    {"id": "grok", "name": "Grok", "provider": "xAI", "prefix": "Grok ", "featured": True, "versions": [
        ("3", r"^grok-3-openrouter$"),
        ("4", r"^grok-4-0709$"),
        ("4.20", r"^(grok-4\.20-beta-0309b-reasoning|xai-grok-4-20-beta-0309-reasoning)$"),
        ("4.5", r"^xai-grok-4-5-"),
        ("4.6", r"^xai-grok-4-6-"),
    ]},
    {"id": "deepseek", "name": "DeepSeek", "provider": "DeepSeek", "prefix": "DeepSeek ", "featured": True, "versions": [
        ("R1", r"^R1$"),
        ("R1 (28.05)", r"^deepseek_r1_0528"),
        ("V3.2", r"^deepseek-v3\.2$"),
        ("V4 Pro", r"^deepseek-v4-pro-"),
    ]},
    {"id": "kimi", "name": "Kimi", "provider": "Moonshot AI", "prefix": "Kimi ", "featured": True, "versions": [
        ("K2.5", r"^kimi-k2\.5$"),
        ("K3", r"^moonshot-kimi-k3-"),
    ]},
    {"id": "glm", "name": "GLM", "provider": "Z.ai", "prefix": "GLM-", "versions": [
        ("5", r"^glm-5$"),
        ("5.2", r"^glm-5\.2$"),
    ]},
]

# Sitede gizlenen (display:false) satırlar ortalamaya girmez — grafikte ne görünüyorsa o.
ONLY_DISPLAYED = True

_COMPILED = [(f, v, re.compile(p)) for f in FAMILIES for v, p in f["versions"]]


def match(model_id, provider):
    for fam, ver, rx in _COMPILED:
        if fam["provider"] == provider and rx.match(model_id):
            return fam["id"], ver
    return None


def variant_label(display_name):
    m = re.search(r"\(([^()]*)\)\s*$", display_name or "")
    return m.group(1) if m else (display_name or "standart")


# Sağlayıcı kadro ortalaması: birden fazla ailesi olan sağlayıcıya bir "(tümü)" hattı.
LINEUP_NAMES = {"Anthropic": "Claude", "OpenAI": "GPT", "Google": "Gemini"}


def lineup_families(families):
    """Her model çıkışında, sağlayıcının her ailesinin o güne kadar çıkmış en güncel
    sürümünün ortalaması. Bir ailenin en yeni sürümü o testte ölçülmemişse, ailenin
    o testte ölçülmüş en son sürümü kullanılır."""
    out = []
    by_provider = collections.defaultdict(list)
    for fam in families:
        by_provider[fam["provider"]].append(fam)
    for provider, fams in by_provider.items():
        if len(fams) < 2:
            continue   # tek aileli sağlayıcıda kadro = ailenin kendisi
        brand = LINEUP_NAMES.get(provider, provider)
        dates = sorted({v["released"] for f in fams for v in f["versions"] if v["released"]})
        versions = []
        for day in dates:
            released = [v["label"] for f in fams for v in f["versions"] if v["released"] == day]
            scores = {}
            for ds_id, _ in BENCHMARKS:
                members = []
                for f in fams:
                    scored = [v for v in f["versions"] if v["released"] and v["released"] <= day and ds_id in v["scores"]]
                    if scored:
                        members.append((scored[-1]["label"], scored[-1]["scores"][ds_id]))
                if not members:
                    continue
                mean_costs = [s["meanCost"] for _, s in members if s["meanCost"] is not None]
                best_costs = [s["bestCost"] for _, s in members if s["bestCost"] is not None]
                scores[ds_id] = {
                    "lineup": True,
                    "n": len(members),
                    "mean": statistics.fmean(s["mean"] for _, s in members),
                    "max": statistics.fmean(s["max"] for _, s in members),
                    "min": statistics.fmean(s["min"] for _, s in members),
                    "meanCost": statistics.fmean(mean_costs) if mean_costs else None,
                    "bestCost": statistics.fmean(best_costs) if best_costs else None,
                    # üyeler: tooltip'te ortalama / en iyi moduna göre gösterilir
                    "variants": sorted(({"name": label, "score": s["mean"], "max": s["max"],
                                         "cost": s["meanCost"], "bestCost": s["bestCost"]} for label, s in members),
                                       key=lambda m: -m["score"]),
                }
            if scores:
                ver = " + ".join(released)
                versions.append({"version": ver, "label": f"{brand} kadrosu · {ver}", "released": day, "scores": scores})
        out.append({
            "id": "lineup-" + provider.lower().replace(" ", "-").replace(".", ""),
            "name": f"{brand} (tümü)",
            "provider": provider,
            "featured": False,
            "aggregate": True,
            "versions": versions,
        })
    return out


def main():
    models = {m["id"]: m for m in json.loads((RAW / "models.json").read_text(encoding="utf-8"))}
    evals = json.loads((RAW / "evaluations.json").read_text(encoding="utf-8"))
    bench_ids = dict(BENCHMARKS)

    # (aile, sürüm) → benchmark → satırlar
    rows = collections.defaultdict(lambda: collections.defaultdict(list))
    dates = collections.defaultdict(collections.Counter)
    unmatched = collections.Counter()
    for row in evals:
        if row["datasetId"] not in bench_ids or row.get("score") is None:
            continue
        if ONLY_DISPLAYED and not row.get("display", True):
            continue
        model = models.get(row["modelId"], {})
        key = match(row["modelId"], model.get("providerId"))
        if key is None:
            unmatched[(model.get("providerId"), model.get("displayName") or row["modelId"])] += 1
            continue
        rows[key][row["datasetId"]].append({
            "name": variant_label(model.get("displayName")),
            "score": row["score"],
            "cost": row.get("cost") if row["datasetId"] in RUN_COST else row.get("costPerTask"),
        })
        if model.get("modelReleaseDate"):
            dates[key][model["modelReleaseDate"][:10]] += 1

    families = []
    for fam in FAMILIES:
        versions = []
        for ver, _ in fam["versions"]:
            key = (fam["id"], ver)
            if key not in rows:
                print(f"UYARI — {fam['name']} {ver}: hiç sonuç yok")
                continue
            # Sürümün tarihi: seçeneklerinde en sık geçen tarih (v3'te farklı tarih taşıyanlar var)
            released = sorted(dates[key].items(), key=lambda kv: (-kv[1], kv[0]))[0][0] if dates[key] else None
            scores = {}
            for ds_id, _ in BENCHMARKS:
                variants = sorted(rows[key].get(ds_id, []), key=lambda v: -v["score"])
                if not variants:
                    continue
                vals = [v["score"] for v in variants]
                costs = [v["cost"] for v in variants if v["cost"] is not None]
                scores[ds_id] = {
                    "n": len(vals),
                    "mean": statistics.fmean(vals),
                    "min": min(vals),
                    "max": max(vals),
                    # görev başı $; ARC-AGI-3'te koşunun toplam $'ı (RUN_COST)
                    "meanCost": statistics.fmean(costs) if costs else None,
                    "bestCost": variants[0]["cost"],
                    "variants": variants,
                }
            versions.append({"version": ver, "label": fam["prefix"] + ver, "released": released, "scores": scores})
        families.append({
            "id": fam["id"],
            "name": fam["name"],
            "provider": fam["provider"],
            "featured": fam.get("featured", False),
            "versions": versions,
        })

    families += lineup_families(families)

    fetched = datetime.date.fromtimestamp((RAW / "evaluations.json").stat().st_mtime).isoformat()
    out = {
        "source": "https://arcprize.org/leaderboard",
        "fetched": fetched,
        "benchmarks": [{"id": i, "label": l, "costUnit": "run" if i in RUN_COST else "task"} for i, l in BENCHMARKS],
        "families": families,
    }
    text = json.dumps(out, ensure_ascii=False, indent=1)
    (ROOT / "data" / "arc_trend.json").write_text(text, encoding="utf-8")
    (ROOT / "data" / "arc_trend.js").write_text("window.ARC_TREND = " + text + ";\n", encoding="utf-8")

    for fam in families:
        print(f"\n{fam['name']} ({fam['provider']})")
        for v in fam["versions"]:
            cells = []
            for ds_id, label in BENCHMARKS:
                s = v["scores"].get(ds_id)
                cost = f" ${s['meanCost']:.2f}" if s and s["meanCost"] is not None else ""
                cells.append(f"{label[-1]}: {s['mean']*100:5.1f}% n={s['n']}{cost}" if s else f"{label[-1]}:   —        ")
            print(f"  {v['label']:22} {v['released'] or '?':10}  " + "   ".join(cells))

    print(f"\nAileye girmeyen satırlar ({sum(unmatched.values())}):")
    for (prov, name), n in sorted(unmatched.items(), key=lambda kv: str(kv[0])):
        print(f"  {prov}: {name}")


if __name__ == "__main__":
    main()
