# Image placement

The page automatically displays an image once the matching file exists; otherwise it keeps its styled placeholder.

- `hero-dish.png` — the large food image behind the phone in the hero section.
- `app-preview.png` — a full-screen crop of the ChopChop Eats app for the phone mockup.
- `chefs/momo.png`, `chefs/kuai.png`, `chefs/deng.png`, `chefs/zhao.png` — portrait-oriented cook photos. Each one populates its Featured cooks card and the matching small avatar in the phone mockup.
- `social/instagram.svg`, `social/tiktok.svg`, `social/facebook.svg` — currently supplied brand marks in the footer. Replace the `href` values in `index.html` once the profile URLs are available.
- `decorations/` — hand-drawn orange food and kitchen illustrations used as subtle, non-interactive page accents. The directory was renamed from `fly` to better match its role.
- `../favicon.png` — a 512×512 tab icon generated from the supplied ChopChop logo with white breathing room for crisp browser-tab rendering.

Use JPG, PNG, or WebP if desired, but update the corresponding `data-image-src` in `index.html` when using a different filename or extension.
