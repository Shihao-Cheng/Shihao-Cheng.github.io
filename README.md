# Shihao Cheng — Academic Homepage

Personal academic homepage of **Shihao Cheng (程世豪)** — M.S. student at LIESMARS, Wuhan University, working on multimodal understanding and generation, audio-video joint generation, and streaming video world models.

🌐 Live site: https://Shihao-Cheng.github.io/

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. See [`CUSTOMIZATION_NOTES.md`](./CUSTOMIZATION_NOTES.md) for what was customized.

## Local development

```bash
# With Docker (recommended):
docker compose pull && docker compose up
# → http://localhost:8080

# Or native Ruby:
bundle install
bundle exec jekyll serve --livereload
```

## Deployment

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the site to GitHub Pages on every push to `main`/`master`.

After pushing:

1. Repo Settings → Pages → Source: **GitHub Actions**.
2. The site will be available at `https://Shihao-Cheng.github.io/<repo-name>/` (or `https://Shihao-Cheng.github.io/` if the repo is named `Shihao-Cheng.github.io`).

## License

The al-folio theme is licensed under the MIT License. The content (papers, photos, project descriptions) is © Shihao Cheng.
