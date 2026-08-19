# vicky0619.github.io

Personal site for **Wen-Chi (Vicky) Tsai** — M.S. in Intelligent Information Systems,
Language Technologies Institute, Carnegie Mellon University.

Live at <https://vicky0619.github.io/>

Built with [luost26/academic-homepage](https://github.com/luost26/academic-homepage) (Jekyll).

## Pages

| Page | Contents |
|---|---|
| Home | Bio, education, experience summary, news, selected publications |
| Experience | Full detail for each role and project |
| Publications | Papers |
| Blog | Link to <https://vicky0619.github.io/blog/> |

## Editing content

All content lives in YAML and Markdown — no HTML editing required.

| What | File |
|---|---|
| Name, positions, email, links, bio, education, experience summary | `_data/profile.yml` |
| Role and project detail shown on the Experience page | `_data/cv.yml` |
| Navigation bar | `_data/navigation.yml` |
| Which homepage sections are shown | `_data/display.yml` |
| Co-author names and links | `_data/authors.yml` |
| News timeline | `_news/` — one Markdown file per item |
| Publications | `_publications/<year>/` — one Markdown file per paper |
| Resume PDF, portrait, images | `assets/files/`, `assets/images/` |

Adding a role or project is one YAML block in `_data/cv.yml`.
Adding a news item is one new file in `_news/`.

## Local preview

Requires Ruby and Bundler:

```bash
bundle install
bundle exec jekyll serve
# http://127.0.0.1:4000/
```

## Deploying

Pushing to `main` triggers the GitHub Pages build:

```bash
git add -A
git commit -m "Update content"
git push
```

Build status is under the repository's Actions tab (`pages-build-deployment`).

This repository is `vicky0619/vicky0619.github.io`, so the site is served from the
root URL and `baseurl` in `_config.yml` is empty. The Hexo blog lives separately in
`vicky0619/blog` and is served from `/blog/`.

## License

Template licensed under MIT, see `LICENSE`. Site content © Wen-Chi Tsai.
