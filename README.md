# BioTech Genomics — 企业官网

基于 [Astro](https://astro.build/) 构建的 CRISPR 基因编辑生物科技公司官网，支持中英双语、亮暗主题切换。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Astro | 6.4+ | 静态站点生成框架 |
| Tailwind CSS | 3.4+ | 原子化 CSS 样式 |
| TypeScript | strict | 类型安全 |

## 快速开始

### 环境要求

- **Node.js** ≥ 22.12.0（推荐 24.x）
- **npm** ≥ 10

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览生产构建
npm run preview
```

## 项目结构

```
src/
├── components/           # UI 组件
│   ├── common/           # 通用组件（Header, Footer, CTAButton, ThemeToggle 等）
│   ├── home/             # 首页区块组件（Hero, Pipeline, ServiceGrid 等）
│   ├── services/         # 技术服务组件（ScreeningTabs, CellLineTable）
│   ├── products/         # 产品组件（ProductCard, ProductGrid）
│   ├── resources/        # 资源组件（TechPlatformCard, ProtocolCard, FAQItem）
│   ├── news/             # 新闻组件（NewsCard）
│   └── seo/              # SEO 组件（SchemaOrg）
├── data/                 # 📌 站点数据（所有内容的唯一数据源）
│   ├── navigation.ts     # 导航栏与页脚链接
│   ├── homepage.ts       # 首页五屏内容
│   ├── services.ts       # 技术服务数据（CRISPR筛选模式、细胞株类型）
│   ├── products.ts       # 产品分类与条目
│   ├── tech-resources.ts # 技术平台、Protocol、FAQ
│   ├── news.ts           # 新闻条目
│   ├── company.ts        # 公司名称、联系方式、备案号
│   └── seo.ts            # 每页 SEO 元数据
├── i18n/                 # 国际化
│   ├── config.ts         # 语言配置常量
│   ├── utils.ts          # localized(), t(), getLangFromUrl() 等工具函数
│   └── ui/               # UI 界面文案翻译
│       ├── en.ts
│       └── zh.ts
├── layouts/              # 页面布局
│   ├── BaseLayout.astro  # HTML 壳、<head>、Header、Footer、主题初始化
│   └── PageLayout.astro  # BaseLayout + 页面标题横幅
├── pages/                # 路由页面
│   ├── index.astro       # 根路径重定向至 /en/
│   ├── en/               # 英文页面
│   └── zh/               # 中文页面
└── styles/
    └── global.css        # Tailwind 引入 + CSS 自定义属性（亮/暗主题）+ 动画
```

## 核心功能

### 🌐 中英双语

- URL 前缀路由：`/en/` 和 `/zh/`
- 内容数据使用 `{ en: "...", zh: "..." }` 双语字段
- 组件通过 `localized(data, lang)` 解析当前语言
- Header 中提供语言切换按钮

### 🎨 亮/暗主题

- **默认主题**：亮色（Light）
- 通过 CSS 自定义属性（`--color-*`）实现，定义在 `src/styles/global.css`
- `:root` = 亮色，`[data-theme="dark"]` = 暗色
- Header 中提供主题切换按钮（☀️/🌙）
- 选择持久化到 `localStorage`，刷新不丢失
- `<head>` 中内联脚本防止主题闪烁

### 📌 集中式数据管理

**所有页面内容集中在 `src/data/` 目录**，修改内容无需改动组件代码。

| 想修改的内容 | 编辑的文件 |
|-------------|-----------|
| 导航菜单 | `src/data/navigation.ts` |
| 首页文案 | `src/data/homepage.ts` |
| 技术服务描述 | `src/data/services.ts` |
| 产品信息 | `src/data/products.ts` |
| 技术资源/FAQ | `src/data/tech-resources.ts` |
| 新闻条目 | `src/data/news.ts` |
| 公司名称/联系方式 | `src/data/company.ts` |
| SEO 标题/描述 | `src/data/seo.ts` |
| UI 按钮文案 | `src/i18n/ui/en.ts` / `zh.ts` |

### 🖼️ 图片占位符

使用 `PlaceholderImage` 组件，后续添加真实图片只需传入 `src` 属性：

```astro
<!-- 占位符模式（当前） -->
<PlaceholderImage alt="描述" width={1200} height={500} aspectRatio="12/5" />

<!-- 替换为真实图片 -->
<PlaceholderImage alt="描述" width={1200} height={500} src="/images/hero.jpg" />
```

### 🔍 SEO

- 每页独立 `<title>` 和 `<meta description>`
- Schema.org JSON-LD 结构化数据（Organization / Service / Product / WebPage）
- `<link rel="alternate" hreflang="...">` 双语替代链接
- 自动生成 `sitemap-index.xml`
- `robots.txt` 已配置

### ✨ 动效

- 滚动渐入（fade-in + translateY）：`<ScrollReveal>` 组件
- 卡片悬停上浮：`.card-lift` CSS 类
- FAQ 手风琴展开/收起
- Tab 切换（CRISPR 筛选三种模式）

## 添加新页面

1. 在 `src/data/` 中添加页面数据
2. 在 `src/data/seo.ts` 中添加 SEO 元数据
3. 创建 `src/pages/en/new-page.astro` 和 `src/pages/zh/new-page.astro`
4. 在 `src/data/navigation.ts` 中添加导航链接

## 部署

构建产物为纯静态 HTML，可部署到任何静态托管平台：

```bash
npm run build
# 产物在 dist/ 目录
```

支持的平台：Vercel、Netlify、Cloudflare Pages、GitHub Pages 等。

## 许可证

私有项目，未开源。
