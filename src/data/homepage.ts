import type { BilingualText, BilingualHref } from "../i18n/utils";

// ── Hero Section ──────────────────────────────────────────────

export interface HeroData {
  headline: BilingualText;
  subheadline: BilingualText;
  ctaPrimary: { label: BilingualText; href: BilingualHref };
  ctaSecondary: { label: BilingualText; href: BilingualHref };
}

export const hero: HeroData = {
  headline: {
    en: "Perturb-seq · CRISPR Screening · Cell Line Engineering",
    zh: "Perturb-seq · CRISPR筛选 · 细胞株构建",
  },
  subheadline: {
    en: "From gene editing to single-cell omics, full-process technical solutions for researchers",
    zh: "从基因编辑到单细胞组学，为研究者提供全流程技术解决方案",
  },
  ctaPrimary: {
    label: { en: "View Services", zh: "查看技术服务" },
    href: { en: "/en/services/crispr-screening/", zh: "/zh/services/crispr-screening/" },
  },
  ctaSecondary: {
    label: { en: "Contact Us", zh: "联系我们" },
    href: { en: "/en/contact/", zh: "/zh/contact/" },
  },
};

// ── Pipeline Section ──────────────────────────────────────────

export interface PipelineStep {
  key: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
}

export interface PipelineData {
  sectionTitle: BilingualText;
  steps: PipelineStep[];
  seoKeywords: BilingualText;
}

export const pipeline: PipelineData = {
  sectionTitle: {
    en: "Perturb-seq Full-Process Platform",
    zh: "Perturb-seq 全流程技术平台",
  },
  steps: [
    {
      key: "sgrna-design",
      title: { en: "sgRNA Design", zh: "sgRNA设计" },
      description: {
        en: "Algorithm-based design covering target gene regions using genomic databases",
        zh: "基于基因组数据库与算法设计，覆盖目标基因区域",
      },
      icon: "sgrna",
    },
    {
      key: "lentiviral-library",
      title: { en: "Lentiviral Library Construction", zh: "慢病毒文库构建" },
      description: {
        en: "Standardized library packaging and titer determination workflow",
        zh: "标准化的文库包装与滴度测定流程",
      },
      icon: "lentivirus",
    },
    {
      key: "cell-transduction",
      title: { en: "Cell Model Transduction", zh: "细胞模型转导" },
      description: {
        en: "CRISPR perturbation transduction for multiple cell types",
        zh: "支持多类型细胞系的CRISPR扰动转导",
      },
      icon: "transduction",
    },
    {
      key: "single-cell-capture",
      title: { en: "Single-Cell Capture & Sequencing", zh: "单细胞捕获 & 测序" },
      description: {
        en: "Single-cell isolation and library construction on 10x Genomics platform",
        zh: "基于10x Genomics平台进行单细胞分离与文库构建",
      },
      icon: "sequencing",
    },
    {
      key: "data-analysis",
      title: { en: "Data Analysis & Visualization", zh: "数据分析 & 可视化" },
      description: {
        en: "Complete bioinformatics pipeline from raw data to perturbation-phenotype association analysis",
        zh: "从原始数据到扰动-表型关联分析的完整生信流程",
      },
      icon: "analysis",
    },
  ],
  seoKeywords: {
    en: "CRISPR single-cell screening, gene knockout screening, CRISPRa screening, CRISPRi screening, tumor immune target discovery, synthetic lethality screening",
    zh: "CRISPR单细胞筛选、基因敲除筛选、基因激活筛选、基因抑制筛选、肿瘤免疫靶点发现、合成致死靶点筛选",
  },
};

// ── Service Grid Section ──────────────────────────────────────

export interface ServiceCardData {
  key: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  href: BilingualHref;
}

export interface ServiceGridData {
  sectionTitle: BilingualText;
  cards: ServiceCardData[];
}

export const serviceGrid: ServiceGridData = {
  sectionTitle: {
    en: "Services & Products",
    zh: "技术服务与产品",
  },
  cards: [
    {
      key: "crispr-screening",
      title: { en: "CRISPR Screening", zh: "CRISPR筛选" },
      description: {
        en: "Perturb-seq · Pooled · Arrayed three screening modes",
        zh: "Perturb-seq · Pooled · Arrayed 三大筛选模式",
      },
      icon: "screening",
      href: { en: "/en/services/crispr-screening/", zh: "/zh/services/crispr-screening/" },
    },
    {
      key: "cell-line-engineering",
      title: { en: "Cell Line Engineering", zh: "细胞株构建" },
      description: {
        en: "Knockout · Activation · Inhibition · Mutation · Methylation/Demethylation · Overexpression · Knockdown",
        zh: "基因敲除 · 激活 · 抑制 · 突变 · 甲基化/去甲基化 · 过表达 · 干扰",
      },
      icon: "cell-line",
      href: { en: "/en/services/cell-line-engineering/", zh: "/zh/services/cell-line-engineering/" },
    },
    {
      key: "single-cell-sequencing",
      title: { en: "Single-Cell Sequencing", zh: "单细胞测序" },
      description: {
        en: "3'/5' Transcriptome · Immune Repertoire · ATAC-seq",
        zh: "3'/5'转录组 · 免疫组库 · ATAC-seq",
      },
      icon: "sequencing",
      href: { en: "/en/services/single-cell-sequencing/", zh: "/zh/services/single-cell-sequencing/" },
    },
    {
      key: "data-analysis",
      title: { en: "Data Analysis", zh: "数据分析" },
      description: {
        en: "Deep analysis and visualization of single-cell multi-omics data",
        zh: "单细胞多组学数据深度分析与可视化",
      },
      icon: "analysis",
      href: { en: "/en/services/data-analysis/", zh: "/zh/services/data-analysis/" },
    },
    {
      key: "gene-editing-products",
      title: { en: "Gene Editing Products", zh: "基因编辑产品" },
      description: {
        en: "Knockout kits · Mutation kits · sgRNA libraries · Off-the-shelf cell lines",
        zh: "敲除试剂盒 · 突变试剂盒 · sgRNA文库 · 现货细胞株",
      },
      icon: "products",
      href: { en: "/en/products/", zh: "/zh/products/" },
    },
    {
      key: "software-tools",
      title: { en: "Software Tools", zh: "软件工具" },
      description: {
        en: "AI-driven research data analysis and knowledge management software",
        zh: "AI驱动的科研数据分析与知识管理软件",
      },
      icon: "software",
      href: { en: "/en/products/", zh: "/zh/products/" },
    },
  ],
};

// ── Vision Section ────────────────────────────────────────────

export interface VisionData {
  sectionTitle: BilingualText;
  body: BilingualText;
  ctaLabel: BilingualText;
  ctaHref: BilingualHref;
}

export const vision: VisionData = {
  sectionTitle: {
    en: "From Perturbation to Model: A Technical Pathway for High-Throughput Genotype-Phenotype Data",
    zh: "从扰动到模型：高通量基因型-表型数据的技术路径",
  },
  body: {
    en: "The convergence of high-throughput CRISPR screening and single-cell sequencing technologies enables systematic construction of \"gene perturbation—transcriptomic response\" association datasets at the whole-genome scale. Such datasets serve as an important foundation for developing cell-computation-based predictive models.\n\nWe are committed to providing researchers with high-quality, traceable Perturb-seq data production and analysis methods, supporting exploration in this field.",
    zh: "高通量CRISPR筛选与单细胞测序技术的融合，使得在全基因组尺度上系统性地建立\"基因扰动—转录组响应\"的关联数据集成为可能。此类数据集是发展基于细胞计算的预测模型的重要基础。\n\n我们致力于为研究者提供高质量、可追溯的Perturb-seq数据生产与分析方法，助力这一领域的探索。",
  },
  ctaLabel: { en: "Explore Tech Resources", zh: "探索技术资源" },
  ctaHref: { en: "/en/resources/", zh: "/zh/resources/" },
};

// ── Footer CTA Section ───────────────────────────────────────

export interface FooterCTAData {
  primary: { label: BilingualText; href: BilingualHref };
  secondary: { label: BilingualText; href: BilingualHref };
}

export const footerCTA: FooterCTAData = {
  primary: {
    label: { en: "Explore Tech Resources", zh: "探索技术资源" },
    href: { en: "/en/resources/", zh: "/zh/resources/" },
  },
  secondary: {
    label: { en: "Submit Project Request", zh: "提交项目需求" },
    href: { en: "/en/contact/", zh: "/zh/contact/" },
  },
};
