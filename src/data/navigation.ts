import type { BilingualText, BilingualHref } from "../i18n/utils";

export interface NavItem {
  key: string;
  label: BilingualText;
  href: BilingualHref;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    key: "services",
    label: { en: "Services", zh: "技术服务" },
    href: { en: "/en/services/crispr-screening/", zh: "/zh/services/crispr-screening/" },
    children: [
      {
        key: "crispr-screening",
        label: { en: "CRISPR Screening", zh: "CRISPR筛选" },
        href: { en: "/en/services/crispr-screening/", zh: "/zh/services/crispr-screening/" },
      },
      {
        key: "cell-line-engineering",
        label: { en: "Cell Line Engineering", zh: "基因编辑细胞株构建" },
        href: { en: "/en/services/cell-line-engineering/", zh: "/zh/services/cell-line-engineering/" },
      },
      {
        key: "single-cell-sequencing",
        label: { en: "Single-Cell Sequencing", zh: "单细胞测序服务" },
        href: { en: "/en/services/single-cell-sequencing/", zh: "/zh/services/single-cell-sequencing/" },
      },
      {
        key: "data-analysis",
        label: { en: "Data Analysis", zh: "数据分析服务" },
        href: { en: "/en/services/data-analysis/", zh: "/zh/services/data-analysis/" },
      },
    ],
  },
  {
    key: "products",
    label: { en: "Products", zh: "产品中心" },
    href: { en: "/en/products/", zh: "/zh/products/" },
  },
  {
    key: "resources",
    label: { en: "Tech Resources", zh: "技术资源" },
    href: { en: "/en/resources/", zh: "/zh/resources/" },
  },
  {
    key: "news",
    label: { en: "News", zh: "新闻" },
    href: { en: "/en/news/", zh: "/zh/news/" },
  },
  {
    key: "contact",
    label: { en: "Contact", zh: "联系我们" },
    href: { en: "/en/contact/", zh: "/zh/contact/" },
  },
];

export const footerNav: NavItem[] = [
  {
    key: "services",
    label: { en: "Services", zh: "技术服务" },
    href: { en: "/en/services/crispr-screening/", zh: "/zh/services/crispr-screening/" },
  },
  {
    key: "products",
    label: { en: "Products", zh: "产品中心" },
    href: { en: "/en/products/", zh: "/zh/products/" },
  },
  {
    key: "resources",
    label: { en: "Tech Resources", zh: "技术资源" },
    href: { en: "/en/resources/", zh: "/zh/resources/" },
  },
  {
    key: "news",
    label: { en: "News", zh: "新闻" },
    href: { en: "/en/news/", zh: "/zh/news/" },
  },
  {
    key: "contact",
    label: { en: "Contact", zh: "联系我们" },
    href: { en: "/en/contact/", zh: "/zh/contact/" },
  },
];
