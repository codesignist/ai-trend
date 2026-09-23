"""arcprize.org/leaderboard'un kullandığı ham JSON dosyalarını data/raw altına indirir."""
import pathlib
import urllib.request

BASE = "https://arcprize.org/media/data/"
FILES = ["datasets.json", "models.json", "providers.json", "evaluations.json"]
RAW = pathlib.Path(__file__).resolve().parent.parent / "data" / "raw"


def main():
    RAW.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        req = urllib.request.Request(BASE + name, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read()
        (RAW / name).write_bytes(body)
        print(f"{name}: {len(body):,} bayt")


if __name__ == "__main__":
    main()
