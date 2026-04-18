# LKRCharon Blog

基于 Astro 6 构建的个人博客，当前部署在 GitHub Pages：

- 线上地址：[https://lkrcharon.github.io](https://lkrcharon.github.io)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

## Tech Stack

- Astro `6.1.7`
- MDX (`@astrojs/mdx`)
- RSS (`@astrojs/rss`)
- Sitemap (`@astrojs/sitemap`)
- Tailwind CSS 4 (`tailwindcss` + `@tailwindcss/vite`)

## Local Development

```bash
npm install
npm run dev
```

本地开发地址默认是 `http://localhost:4321`。

## Build & Preview

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。

## Write a New Post

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件。

示例 frontmatter：

```md
---
title: '你的标题'
description: '一句简介'
pubDate: '2026-04-18'
updatedDate: '2026-04-18'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

正文内容...
```

## Deploy (GitHub Pages)

项目已配置 GitHub Actions 自动部署：

- 工作流文件：`.github/workflows/deploy.yml`
- 触发方式：推送到 `main` 分支
- 发布目录：`dist/`（由 Action 构建后上传）

如果是首次接入，请确认仓库设置：

1. `Settings -> Pages`
2. `Build and deployment` 选择 `GitHub Actions`

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── README.md
```

## Notes

- 站点根地址在 `astro.config.mjs` 的 `site` 字段中维护。
- 若后续要绑定自定义域名，可在仓库根目录新增 `public/CNAME`。
