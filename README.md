# Portfolio

这是一个基于 `Next.js` 的个人作品集站点，已经适配 `GitHub Pages` 静态部署。

## Features

- 主要信息集中在 [`src/data/resume.tsx`](./src/data/resume.tsx)
- 支持博客与静态分页
- 自动兼容两种 Pages 地址
- `https://<username>.github.io/`
- `https://<username>.github.io/<repo>/`
- 已内置 GitHub Actions 自动部署工作流

## Local Development

```bash
pnpm install
pnpm dev
```

本地访问 `http://localhost:3000`。

## Deploy to GitHub Pages

1. 把仓库推到你自己的 GitHub 仓库。
2. 保持默认分支为 `main`。
3. 在 GitHub 仓库里打开 `Settings -> Pages`。
4. 将 `Source` 设为 `GitHub Actions`。
5. 推送到 `main` 后，工作流会自动构建并发布。

如果你的仓库名是 `<username>.github.io`，站点会发布到根路径。

如果你的仓库名是其他名字，例如 `portfolio`，站点会发布到 `https://<username>.github.io/portfolio/`。

## Build for Pages Locally

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://<username>.github.io pnpm run build:pages
```

构建产物会输出到 `out/`。

## Notes

- 模板里原本指向 Vercel 的说明已经移除，当前仓库以 GitHub Pages 为默认部署方式。
- 如果你换了仓库名或绑定了自定义域名，只需要调整对应的环境变量即可。

## License

Licensed under the [MIT license](./LICENSE).
