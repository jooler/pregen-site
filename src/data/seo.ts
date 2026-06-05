import type { BilingualText } from "../i18n/utils";

export interface PageSEO {
  key: string;
  title: BilingualText;
  description: BilingualText;
  ogImage: string;
  schemaType: "Organization" | "Service" | "Product" | "WebPage";
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    key: "home",
    title: {
      en: "Perturb-seq & CRISPR Screening Services | BioTech Genomics",
      zh: "Perturb-seq与CRISPR筛选服务 | 伯泰基因",
    },
    description: {
      en: "Full-process CRISPR screening, cell line engineering, and single-cell sequencing solutions for researchers.",
      zh: "为研究者提供从基因编辑到单细胞组学的全流程技术解决方案。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Organization",
  },
  "crispr-screening": {
    key: "crispr-screening",
    title: {
      en: "CRISPR Screening Services | BioTech Genomics",
      zh: "CRISPR筛选服务 | 伯泰基因",
    },
    description: {
      en: "Perturb-seq, Pooled, and Arrayed CRISPR screening services for functional genomics research.",
      zh: "Perturb-seq、Pooled和Arrayed CRISPR筛选服务，用于功能基因组学研究。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Service",
  },
  "cell-line-engineering": {
    key: "cell-line-engineering",
    title: {
      en: "Cell Line Engineering Services | BioTech Genomics",
      zh: "基因编辑细胞株构建服务 | 伯泰基因",
    },
    description: {
      en: "Gene knockout, activation, inhibition, mutagenesis, methylation, overexpression, and knockdown cell line construction.",
      zh: "基因敲除、激活、抑制、突变、甲基化、过表达、干扰等细胞株构建服务。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Service",
  },
  "single-cell-sequencing": {
    key: "single-cell-sequencing",
    title: {
      en: "Single-Cell Sequencing Services | BioTech Genomics",
      zh: "单细胞测序服务 | 伯泰基因",
    },
    description: {
      en: "3'/5' transcriptome, immune repertoire, and ATAC-seq single-cell sequencing services.",
      zh: "3'/5'转录组、免疫组库、ATAC-seq单细胞测序服务。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Service",
  },
  "data-analysis": {
    key: "data-analysis",
    title: {
      en: "Data Analysis Services | BioTech Genomics",
      zh: "数据分析服务 | 伯泰基因",
    },
    description: {
      en: "Bioinformatics analysis and visualization for single-cell multi-omics data.",
      zh: "单细胞多组学数据的生信分析与可视化。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Service",
  },
  products: {
    key: "products",
    title: {
      en: "Gene Editing Products | BioTech Genomics",
      zh: "基因编辑产品 | 伯泰基因",
    },
    description: {
      en: "Gene editing kits, sgRNA libraries, off-the-shelf cell lines, and software tools.",
      zh: "基因编辑试剂盒、sgRNA文库、现货细胞株与软件工具。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "Product",
  },
  resources: {
    key: "resources",
    title: {
      en: "Tech Resources | BioTech Genomics",
      zh: "技术资源 | 伯泰基因",
    },
    description: {
      en: "Technical platforms, protocols, white papers, and FAQ for CRISPR screening and single-cell sequencing.",
      zh: "CRISPR筛选和单细胞测序的技术平台、操作指南、白皮书和常见问题。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "WebPage",
  },
  news: {
    key: "news",
    title: {
      en: "News | BioTech Genomics",
      zh: "新闻 | 伯泰基因",
    },
    description: {
      en: "Latest updates and announcements from BioTech Genomics.",
      zh: "伯泰基因的最新动态与公告。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "WebPage",
  },
  contact: {
    key: "contact",
    title: {
      en: "Contact Us | BioTech Genomics",
      zh: "联系我们 | 伯泰基因",
    },
    description: {
      en: "Get in touch with our team to discuss your project needs.",
      zh: "与我们的团队沟通您的项目需求。",
    },
    ogImage: "/images/og-default.png",
    schemaType: "WebPage",
  },
};
