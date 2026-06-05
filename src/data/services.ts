import type { BilingualText, BilingualHref, BilingualArray } from "../i18n/utils";

// ── CRISPR Screening Modes ───────────────────────────────────

export interface ScreeningMode {
  key: string;
  title: BilingualText;
  useCase: BilingualText;
  workflow: BilingualText;
  features: BilingualArray;
}

export const screeningModes: ScreeningMode[] = [
  {
    key: "perturb-seq",
    title: {
      en: "Perturb-seq (Single-Cell CRISPR Screening)",
      zh: "Perturb-seq（单细胞CRISPR筛选）",
    },
    useCase: {
      en: "High-throughput gene function discovery, transcriptomic phenotype analysis, data production for predictive models",
      zh: "高通量基因功能发现、转录组层面表型分析、虚拟细胞/预测模型的数据生产",
    },
    workflow: {
      en: "sgRNA library → Lentiviral packaging → Cell transduction → Single-cell capture (10x) → Sequencing → Data analysis",
      zh: "sgRNA文库→慢病毒包装→细胞转导→单细胞捕获(10x)→测序→数据分析",
    },
    features: {
      en: ["Single-cell resolution", "Transcriptomic readout", "Pooled format", "Whole-genome scale"],
      zh: ["单细胞分辨率", "转录组读出", "混合筛选形式", "全基因组尺度"],
    },
  },
  {
    key: "pooled",
    title: {
      en: "Pooled CRISPR Screening",
      zh: "Pooled CRISPR筛选",
    },
    useCase: {
      en: "Cell phenotype screening (proliferation / drug resistance / viability), based on next-generation sequencing",
      zh: "细胞表型筛选（增殖/耐药/活力），基于二代测序",
    },
    workflow: {
      en: "sgRNA library → Lentiviral packaging → Cell transduction → Selection culture → NGS sequencing → Enrichment analysis",
      zh: "sgRNA文库→慢病毒包装→细胞转导→筛选培养→NGS测序→富集分析",
    },
    features: {
      en: ["Phenotype-based", "NGS readout", "High-throughput", "Cost-effective"],
      zh: ["基于表型", "NGS读出", "高通量", "高性价比"],
    },
  },
  {
    key: "arrayed",
    title: {
      en: "Arrayed CRISPR Screening",
      zh: "Arrayed CRISPR筛选",
    },
    useCase: {
      en: "Low-throughput validation, in-depth functional study of specific genes",
      zh: "低通量验证、特定基因的深入功能研究",
    },
    workflow: {
      en: "sgRNA synthesis → Cell transfection → Phenotype detection → Data summary",
      zh: "sgRNA合成→细胞转染→表型检测→数据汇总",
    },
    features: {
      en: ["One-gene-per-well", "Multi-parametric readout", "Validation-friendly", "Flexible design"],
      zh: ["一基因一孔", "多参数读出", "适合验证", "灵活设计"],
    },
  },
];

// ── Cell Line Engineering Types ───────────────────────────────

export interface CellLineType {
  regulationType: BilingualText;
  technicalRoute: BilingualText;
}

export const cellLineTypes: CellLineType[] = [
  {
    regulationType: { en: "Gene Knockout (KO)", zh: "基因敲除（KO）" },
    technicalRoute: { en: "CRISPR/Cas9 dual nickase or RNP strategy", zh: "CRISPR/Cas9双切口酶或RNP策略" },
  },
  {
    regulationType: { en: "Endogenous Activation (CRISPRa)", zh: "内源激活（CRISPRa）" },
    technicalRoute: { en: "dCas9-VPR / dCas9-SAM system", zh: "dCas9-VPR/dCas9-SAM系统" },
  },
  {
    regulationType: { en: "Endogenous Inhibition (CRISPRi)", zh: "内源抑制（CRISPRi）" },
    technicalRoute: { en: "dCas9-KRAB system", zh: "dCas9-KRAB系统" },
  },
  {
    regulationType: { en: "Site-Directed Mutagenesis", zh: "定点突变" },
    technicalRoute: { en: "ssODN/HDR template + CRISPR knock-in strategy", zh: "ssODN/HDR模板+CRISPR敲入策略" },
  },
  {
    regulationType: { en: "Site-Directed Methylation", zh: "定点甲基化" },
    technicalRoute: { en: "dCas9-DNMT3A fusion system", zh: "dCas9-DNMT3A融合系统" },
  },
  {
    regulationType: { en: "Site-Directed Demethylation", zh: "定点去甲基化" },
    technicalRoute: { en: "dCas9-TET1 fusion system", zh: "dCas9-TET1融合系统" },
  },
  {
    regulationType: { en: "Conventional Overexpression", zh: "常规过表达" },
    technicalRoute: { en: "Lentiviral / transient transduction expression vector", zh: "慢病毒/瞬时转导表达载体" },
  },
  {
    regulationType: { en: "Conventional Knockdown", zh: "常规干扰" },
    technicalRoute: { en: "shRNA / miRNA expression vector", zh: "shRNA/miRNA表达载体" },
  },
];

// ── Service Page Metadata ────────────────────────────────────

export interface ServicePageData {
  pageTitle: BilingualText;
  pageSubtitle: BilingualText;
  description: BilingualText;
}

export const crisprScreeningPage: ServicePageData = {
  pageTitle: { en: "CRISPR Screening", zh: "CRISPR筛选" },
  pageSubtitle: {
    en: "Three screening modes for diverse functional genomics applications",
    zh: "三大筛选模式，覆盖多样化功能基因组学应用",
  },
  description: {
    en: "Perturb-seq, Pooled, and Arrayed CRISPR screening services for gene function discovery and target identification.",
    zh: "Perturb-seq、Pooled和Arrayed三大CRISPR筛选服务，用于基因功能发现与靶点鉴定。",
  },
};

export const cellLineEngineeringPage: ServicePageData = {
  pageTitle: { en: "Cell Line Engineering", zh: "基因编辑细胞株构建" },
  pageSubtitle: {
    en: "Comprehensive gene regulation cell line construction services",
    zh: "全面的基因调控细胞株构建服务",
  },
  description: {
    en: "Gene knockout, activation, inhibition, mutagenesis, methylation, overexpression, and knockdown cell line construction.",
    zh: "基因敲除、激活、抑制、突变、甲基化、过表达、干扰等细胞株构建服务。",
  },
};

export const singleCellSequencingPage: ServicePageData = {
  pageTitle: { en: "Single-Cell Sequencing", zh: "单细胞测序服务" },
  pageSubtitle: {
    en: "Multi-modal single-cell omics profiling services",
    zh: "多模态单细胞组学检测服务",
  },
  description: {
    en: "3'/5' transcriptome, immune repertoire, and ATAC-seq single-cell sequencing services on 10x Genomics platform.",
    zh: "基于10x Genomics平台的3'/5'转录组、免疫组库、ATAC-seq单细胞测序服务。",
  },
};

export const dataAnalysisPage: ServicePageData = {
  pageTitle: { en: "Data Analysis", zh: "数据分析服务" },
  pageSubtitle: {
    en: "Bioinformatics analysis and visualization for single-cell multi-omics data",
    zh: "单细胞多组学数据的生信分析与可视化",
  },
  description: {
    en: "Complete bioinformatics pipeline from raw data processing to biological insight extraction for single-cell multi-omics datasets.",
    zh: "从原始数据处理到生物学洞察提取的完整单细胞多组学数据生信分析流程。",
  },
};
