import type { BilingualText, BilingualHref } from "../i18n/utils";

export interface NewsItem {
  key: string;
  title: BilingualText;
  summary: BilingualText;
  date: string;
  category: BilingualText;
  href: BilingualHref;
}

export const newsItems: NewsItem[] = [
  {
    key: "news-1",
    title: {
      en: "Perturb-seq Technology Platform Update",
      zh: "Perturb-seq技术平台更新",
    },
    summary: {
      en: "Our Perturb-seq platform has been updated with improved library construction protocols and expanded cell type support.",
      zh: "我们的Perturb-seq平台已更新，改进了文库构建流程并扩展了细胞类型支持。",
    },
    date: "2025-01-15",
    category: { en: "Technology", zh: "技术" },
    href: { en: "#", zh: "#" },
  },
  {
    key: "news-2",
    title: {
      en: "New sgRNA Library Products Released",
      zh: "新sgRNA文库产品发布",
    },
    summary: {
      en: "A new series of focused sgRNA libraries for immune checkpoint and synthetic lethality screening are now available.",
      zh: "针对免疫检查点和合成致死筛选的全新聚焦sgRNA文库系列现已上市。",
    },
    date: "2024-12-20",
    category: { en: "Product", zh: "产品" },
    href: { en: "#", zh: "#" },
  },
  {
    key: "news-3",
    title: {
      en: "Collaboration on Virtual Cell Research",
      zh: "虚拟细胞研究合作",
    },
    summary: {
      en: "We are collaborating with research teams on generating high-quality genotype-phenotype association datasets for predictive cell modeling.",
      zh: "我们正在与研究团队合作，为预测性细胞模型生成高质量的基因型-表型关联数据集。",
    },
    date: "2024-11-10",
    category: { en: "Research", zh: "研究" },
    href: { en: "#", zh: "#" },
  },
];
