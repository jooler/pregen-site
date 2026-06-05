import type { BilingualText } from "../i18n/utils";

// ── Tech Platforms ────────────────────────────────────────────

export interface TechPlatform {
  key: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
}

export const platforms: TechPlatform[] = [
  {
    key: "crispr-platform",
    title: { en: "CRISPR Screening Platform", zh: "CRISPR筛选平台" },
    description: {
      en: "Full-process CRISPR screening platform supporting Perturb-seq, Pooled, and Arrayed modes with standardized workflows",
      zh: "支持Perturb-seq、Pooled和Arrayed三大模式的全流程CRISPR筛选平台，标准化操作流程",
    },
    icon: "screening",
  },
  {
    key: "single-cell-platform",
    title: { en: "Single-Cell Omics Platform", zh: "单细胞组学平台" },
    description: {
      en: "10x Genomics-based single-cell sequencing platform for transcriptomic, epigenomic, and immune repertoire profiling",
      zh: "基于10x Genomics的单细胞测序平台，支持转录组、表观组和免疫组库检测",
    },
    icon: "sequencing",
  },
  {
    key: "bioinformatics-platform",
    title: { en: "Bioinformatics Analysis Platform", zh: "生信分析平台" },
    description: {
      en: "Integrated computational pipeline for single-cell multi-omics data processing, analysis, and visualization",
      zh: "集成的单细胞多组学数据处理、分析与可视化计算流程",
    },
    icon: "analysis",
  },
];

// ── Protocols & White Papers ──────────────────────────────────

export interface Protocol {
  key: string;
  title: BilingualText;
  description: BilingualText;
  downloadUrl: string;
  fileType: string;
}

export const protocols: Protocol[] = [
  {
    key: "perturb-seq-protocol",
    title: { en: "Perturb-seq Experimental Protocol", zh: "Perturb-seq实验操作指南" },
    description: {
      en: "Step-by-step protocol for Perturb-seq library preparation and sequencing",
      zh: "Perturb-seq文库构建与测序的逐步操作指南",
    },
    downloadUrl: "#",
    fileType: "PDF",
  },
  {
    key: "crispr-screening-protocol",
    title: { en: "Pooled CRISPR Screening Protocol", zh: "Pooled CRISPR筛选操作指南" },
    description: {
      en: "Standardized workflow for pooled CRISPR screening from library design to hit identification",
      zh: "从文库设计到靶点鉴定的标准化Pooled CRISPR筛选流程",
    },
    downloadUrl: "#",
    fileType: "PDF",
  },
  {
    key: "cell-line-engineering-protocol",
    title: { en: "Cell Line Engineering Protocol", zh: "细胞株构建操作指南" },
    description: {
      en: "Guidelines for CRISPR-mediated gene editing in mammalian cell lines",
      zh: "CRISPR介导的哺乳动物细胞系基因编辑操作指南",
    },
    downloadUrl: "#",
    fileType: "PDF",
  },
];

// ── FAQ ───────────────────────────────────────────────────────

export interface FAQItem {
  key: string;
  question: BilingualText;
  answer: BilingualText;
}

export const faqItems: FAQItem[] = [
  {
    key: "perturb-seq-vs-pooled",
    question: {
      en: "What is the difference between Perturb-seq and Pooled CRISPR screening?",
      zh: "Perturb-seq和Pooled CRISPR筛选有什么区别？",
    },
    answer: {
      en: "Perturb-seq combines CRISPR perturbation with single-cell RNA sequencing, providing transcriptomic readout at single-cell resolution. Pooled CRISPR screening uses bulk sequencing to measure sgRNA abundance changes under selection pressure, suitable for phenotype-based screening.",
      zh: "Perturb-seq将CRISPR扰动与单细胞RNA测序结合，在单细胞分辨率下提供转录组读出。Pooled CRISPR筛选使用混合测序来测量选择压力下sgRNA丰度变化，适合基于表型的筛选。",
    },
  },
  {
    key: "cell-types-supported",
    question: {
      en: "What cell types are supported for CRISPR screening?",
      zh: "CRISPR筛选支持哪些细胞类型？",
    },
    answer: {
      en: "We support a wide range of cell types including common cancer cell lines, primary cells, and immune cells. Specific cell type compatibility requires technical consultation to confirm.",
      zh: "我们支持多种细胞类型，包括常见肿瘤细胞系、原代细胞和免疫细胞。具体细胞类型的兼容性需技术沟通确认。",
    },
  },
  {
    key: "project-timeline",
    question: {
      en: "What is the typical timeline for a Perturb-seq project?",
      zh: "Perturb-seq项目的典型周期是多长？",
    },
    answer: {
      en: "Project timelines vary depending on experimental design, library complexity, and cell type. Please contact us for a detailed discussion of your project requirements.",
      zh: "项目周期取决于实验设计、文库复杂度和细胞类型。请联系我们详细沟通您的项目需求。",
    },
  },
  {
    key: "data-delivery",
    question: {
      en: "What data analysis deliverables are included?",
      zh: "数据分析交付物包含哪些内容？",
    },
    answer: {
      en: "Deliverables typically include processed data matrices, quality control reports, differential expression analysis, and perturbation-phenotype association results. Customized analysis is available upon request.",
      zh: "交付物通常包括处理后的数据矩阵、质控报告、差异表达分析和扰动-表型关联结果。可根据需求提供定制化分析。",
    },
  },
];

// ── Resources Page Metadata ──────────────────────────────────

export const resourcesPageTitle: BilingualText = {
  en: "Tech Resources",
  zh: "技术资源",
};

export const resourcesPageSubtitle: BilingualText = {
  en: "Technical platforms, protocols, and documentation",
  zh: "技术平台、操作指南与文档",
};
