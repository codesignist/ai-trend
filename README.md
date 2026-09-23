# ai-trend

ARC Prize leaderboard'undaki (https://arcprize.org/leaderboard) ARC-AGI-1 / 2 / 3
sonuçlarından **model ailesi eğrileri**: her sürümün tüm efor seçenekleri tek noktaya
(ortalama) indirgenir, aynı ailenin sürümleri çıkış tarihine göre tek çizgide birleşir.
Sayfada aileler açılır listeden seçilir (Amiral modeller / Tümü / Sadece Opus ön ayarları).

**Canlı sayfa:** https://codesignist.github.io/ai-trend/

## Kullanım

```
python scripts/fetch.py   # arcprize.org/media/data/*.json → data/raw/
python scripts/build.py   # data/raw → data/arc_trend.json + data/arc_trend.js
```

Sonra `index.html`'i tarayıcıda aç (sunucu gerekmez).

## Kurallar

- Kaynak setler: `v1_Semi_Private`, `v2_Semi_Private`, `v3_Semi_Private` — sitenin grafikte gösterdikleri.
- Sitede gizlenen (`display: false`) satırlar ortalamaya girmez (`ONLY_DISPLAYED`).
- Aileler ve sürümler `scripts/build.py` → `FAMILIES` (modelId regex + sağlayıcı). Yeni bir
  sürüm çıkınca ilgili aileye bir satır eklenir; hiçbir aileye girmeyen satırlar build
  sonunda listelenir.
- Sürümün tarihi, seçeneklerinde en sık geçen `modelReleaseDate`'tir.
- **Sağlayıcı kadro ortalaması** ("Claude / GPT / Gemini (tümü)", `lineup_families`): sağlayıcının
  her model çıkışında, her ailesinin o güne kadarki en güncel sürümünün ortalaması. Bir ailenin
  en yeni sürümü o testte ölçülmemişse ailenin o testte ölçülmüş en son sürümü kullanılır.
  Tek aileli sağlayıcılara eklenmez (kadro = aile).
- Renk sağlayıcıdan, çizgi deseni sağlayıcı içindeki sıradan gelir (`index.html`).
- Maliyet ekseni: görev başı $ (log). "Ortalama"da seçeneklerin maliyet ortalaması (`meanCost`),
  "En iyi seçenek"te en yüksek skorlu seçeneğin kendi maliyeti (`bestCost`). ARC-AGI-3 için
  leaderboard maliyet yayınlamıyor.
- Ortalama, sürümün **ölçülmüş** seçeneklerinin aritmetik ortalamasıdır. Sürümler aynı
  efor setiyle ölçülmediği için sayfada "En iyi seçenek" görünümü de var.

## Bilerek dışarıda kalanlar

o-serisi, GPT-4.x, GPT Nano, GPT-5.6 Terra, Gemini Deep Think / Flash-Lite, DeepSeek V4 Flash,
Inkling, Llama, Mistral, Qwen, Minimax, üçüncü taraf "Refine." çözümleri ve GPT-6
"Provider Adapter" sonuçları. Eklemek için `FAMILIES`'e aile yazmak yeterli.
