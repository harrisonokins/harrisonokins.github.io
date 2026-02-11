# Harrison Okins' Ultra-Secret Website

This repository controls everything seen on [my personal site](https://www.harrisonokins.com). It is built with [Jekyll](https://jekyllrb.com) and deployed using [GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).

## Instructions

### Prerequisites

1. [Ruby](https://www.ruby-lang.org/en/documentation/installation)
2. [Bundler](https://bundler.io/guides/getting_started.html)
3. [Tailwind CSS' standalone CLI](https://tailwindcss.com/blog/standalone-cli)

### Run The Site

1. Install dependencies: `bundle install`
2. Compile Tailwind's utility CSS: `./tailwindcss -i _sass/tailwind.css -o assets/tailwind.css`
3. Start the Jekyll server: `bundle exec jekyll serve`
4. Open your browser and visit [http://localhost:4000](http://localhost:4000)
