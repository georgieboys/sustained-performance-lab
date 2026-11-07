# Sustained Performance Lab

_A unified operating system for long-lived human performance._

SPL tries to answer one question: **how should we maintain and strengthen the human body and mind so it performs better and ages well?**

Everything here is open: the protocols, the reasoning and the evidence. Read it, question it, adapt it to your own life.

> **Not medical advice.** We are not doctors. We don't diagnose, prescribe or treat. Your body is your responsibility, and your doctor is your doctor.

## How it's organised

| Layer | What it is |
|---|---|
| **[CANON](docs/canon/index.md)** | The stable core. Practices that make biological sense, have solid evidence and hold up in repeated real-world testing. |
| **[DOJO](docs/dojo/index.md)** | The experimental floor. Promising tools under active testing, labelled *proven*, *plausible* or *mostly vibes*. |
| **On the Bench** | Ideas we're watching but not yet running. |

Start with the **[overview](docs/index.md)**, then the **[Gateway Protocol](docs/canon/gateway-protocol/index.md)**, the nine-step foundation everything else builds on:

1. [Cognitive Reset](docs/canon/gateway-protocol/gp1-cognitive-reset/index.md)
2. [Dynamic Flow](docs/canon/gateway-protocol/gp2-dynamic-flow.md)
3. [Isometric Strength](docs/canon/gateway-protocol/gp3-isometric-strength.md)
4. [Lower Back](docs/canon/gateway-protocol/gp4-lower-back.md)
5. [Knee](docs/canon/gateway-protocol/gp5-knee.md)
6. [Dynamic Loading (Kettlebells)](docs/canon/gateway-protocol/gp6-dynamic-loading.md)
7. [VO₂max Conditioning](docs/canon/gateway-protocol/gp7-vo2max-conditioning.md)
8. [Recovery Ritual](docs/canon/gateway-protocol/gp8-recovery-ritual.md)
9. [Thermal Reset](docs/canon/gateway-protocol/gp9-thermal-reset.md)

Also in the Canon: **[SPL Hard Truths](docs/canon/hard-truths/index.md)** and **[Physical Metrics That Matter](docs/canon/physical-metrics/index.md)**. Drafts in progress: [Sleep Protocol](docs/canon/sleep-protocol.md) and [80/20 Nutrition Protocol](docs/canon/nutrition-protocol/index.md).

## This repo is the source of truth

The SPL knowledge base lives in [`docs/`](docs/) and changes like a codebase: every edit is a commit, every change is reviewable, and the full history is public. Other tools, including SPL's own apps, build on top of this repo.

## The website

Every push to `main` rebuilds and publishes the public site automatically. Every pull request gets its own preview link, so you can see a change before it's merged.

The site is built with [Astro Starlight](https://starlight.astro.build/). To run it locally:

```bash
npm install
npm run dev
```

**Writing docs:** each page is a markdown file in `docs/`. Folders become sidebar sections, and a folder's `index.md` is its overview page. Link between docs with relative `.md` paths (for example `[Knee Protocol](gp5-knee.md)`) so links work both on GitHub and on the site. Control sidebar order with `sidebar.order` in a page's frontmatter.

`src/content/docs` is a symlink to `docs/` because Starlight expects content there. Edit the files in `docs/`.

The docs were first written in [Slite](https://sustainedperformancelab.slite.com/) and imported once with `scripts/export_slite.py`. That script uses the old Slite layout and is kept only for reference.

## Contributing

Found a claim that doesn't hold up, a better study, or a protocol that didn't work for you?

- **Open an issue** to flag a problem or start a discussion.
- **Open a pull request** to propose a change. Cite your sources. Evidence beats opinion.

Nothing enters the Canon without evidence. Changes to the Canon are reviewed before merging.

## License

Content is licensed under [CC BY-SA 4.0](LICENSE). You can share and adapt it, including commercially, as long as you credit Sustained Performance Lab and share your changes under the same license.
