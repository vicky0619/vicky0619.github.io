# Logo files

These five PNGs are placeholders (coloured circles with initials). Replace them
with the real marks and everything on the site picks them up automatically —
the filenames are already wired into `_data/profile.yml` and `_data/cv.yml`.

| File | Organisation | Where to get it |
|---|---|---|
| `cmu.png` | Carnegie Mellon University | https://www.cmu.edu/brand/brand-guidelines/ |
| `ncu.png` | National Central University (used for both the WASN Lab and the College of Hakka Studies rows) | https://www.ncu.edu.tw/ |
| `asus.png` | ASUS | https://www.asus.com/ (press / brand assets) |
| `roommuse.png` | RoomMuse | ask the team for the app icon |
| `aipost.png` | AI POST | site logo / favicon |

## What the file should look like

- **Square.** The site renders them at 18px (homepage summary) and 34px
  (Experience page cards), so anything non-square gets squashed.
- **Transparent background** (PNG), or a solid background that reads fine as a
  small square.
- **256×256 or larger.** Smaller than that goes blurry on retina screens.
- Keep the exact filenames above — do not rename.
- The mark alone works better than mark + wordmark; a wordmark shrunk to 18px
  is unreadable.

Drop the files in, then:

```bash
git add -A
git commit -m "Replace placeholder badges with real logos"
git push
```

`wasn.png` is no longer referenced by anything and can be deleted.
