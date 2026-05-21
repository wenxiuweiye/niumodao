---
title: Niumodao
date: 2026-05-20
layout: ../../../layout/BlogPost.astro
tags: ["development"]
---


## 项目简介
这是一个基于 Astro + React 的多语言网站示例，集成了本地 Decap CMS 编辑界面。项目同时支持 `en` 和 `zh` 两种语言，包含自定义组件、页面布局、博客内容与动画效果。

## 技术栈
- Astro
- React
- TypeScript
- Tailwind CSS
- Decap CMS（本地后台）
- Mux Player
- Framer Motion
- Markdown 博客内容

## 环境要求
- Node.js >= 22.12.0
- pnpm
- 推荐使用 PowerShell / Windows Terminal

## 快速开始
```bash
pnpm install
pnpm run dev
```

构建与预览：
```bash
pnpm run build
pnpm run preview
```

CMS 本地调试：
```bash
pnpm run dev:cms
```

## CMS 说明（Windows）
- CMS 配置文件：public/admin/config.yml
- 本地媒体目录：public/images
- CMS 管理页面：http://localhost:3000/admin/
- Windows 环境下，如果 `pnpm run dev:cms` 因 `&` 语法失败，可改为：
  - 终端 1：`pnpm exec decap-server`
  - 终端 2：`pnpm run dev`
- `local_backend: true` 仅用于本地测试，不连接真实仓库

## 项目结构
- `astro.config.mjs`：Astro 配置与多语言设置
- `package.json`：依赖与脚本
- `public/admin/config.yml`：Decap CMS 本地配置
- `src/pages/`
  - `index.astro`
  - `en/index.astro`
  - `zh/index.astro`
  - `zh/blog/`：博客内容目录
- `src/components/`：组件集合
- `src/layout/`：页面布局组件
- `src/data/en/home.ts`：英语首页内容数据
- `src/i18n/ui.ts`：UI 多语言文本
- `src/styles/global.css`：全局样式

## 多语言说明
- `astro.config.mjs` 中配置：
  - `locales: ["en", "zh"]`
  - `defaultLocale: "en"`
- 页面分别存放于：
  - `src/pages/en/`
  - `src/pages/zh/`
- 中文博客内容存放于 `src/pages/zh/blog`
- 组件和布局可复用，页面根据语言切换

## 推荐与注意
- 先执行 `pnpm install`
- 本地 CMS 上传资源请存放在 `public/images`
- 若需要跨设备测试，可使用 `pnpm run dev` 结合 `--host`
- 编辑博客内容时，`layout` 字段可保留为 `../../layout/BlogPost.astro`
- 保持 `public/admin/config.yml` 中 collection 与页面目录一致

## 贡献
欢迎提交 issue 或 pull request。若你希望改进多语言支持、CMS 编辑体验或页面组件，可直接参与开发。

## 许可证
MIT
```
