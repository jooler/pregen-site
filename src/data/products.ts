import type { BilingualText, BilingualHref } from "../i18n/utils";

// ── Product Categories ────────────────────────────────────────

export interface ProductItem {
  key: string;
  name: BilingualText;
  description: BilingualText;
}

export interface ProductCategory {
  key: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  items: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    key: "gene-editing-kits",
    title: { en: "Gene Editing Kits & Reagents", zh: "基因编辑试剂盒与试剂" },
    description: {
      en: "Ready-to-use CRISPR gene editing kits for knockout and mutagenesis applications",
      zh: "即用型CRISPR基因编辑试剂盒，用于敲除和突变应用",
    },
    icon: "kit",
    items: [
      {
        key: "knockout-kit",
        name: { en: "Gene Knockout Kit", zh: "基因敲除试剂盒" },
        description: {
          en: "CRISPR/Cas9-based knockout kit with validated sgRNA and delivery reagents",
          zh: "基于CRISPR/Cas9的敲除试剂盒，含验证的sgRNA和递送试剂",
        },
      },
      {
        key: "mutation-kit",
        name: { en: "Site-Directed Mutagenesis Kit", zh: "定点突变试剂盒" },
        description: {
          en: "HDR-based knock-in kit with ssODN templates for precise genome editing",
          zh: "基于HDR的敲入试剂盒，含ssODN模板，用于精确基因组编辑",
        },
      },
    ],
  },
  {
    key: "sgrna-libraries",
    title: { en: "sgRNA Libraries (Plasmid / Lentiviral)", zh: "sgRNA文库（质粒/慢病毒）" },
    description: {
      en: "Pre-designed and custom sgRNA libraries for genome-wide and focused screening",
      zh: "预设计和定制sgRNA文库，用于全基因组和聚焦筛选",
    },
    icon: "library",
    items: [
      {
        key: "genome-wide-library",
        name: { en: "Genome-Wide sgRNA Library", zh: "全基因组sgRNA文库" },
        description: {
          en: "Whole-genome coverage with optimized sgRNA design algorithms",
          zh: "全基因组覆盖，采用优化sgRNA设计算法",
        },
      },
      {
        key: "focused-library",
        name: { en: "Focused sgRNA Library", zh: "聚焦sgRNA文库" },
        description: {
          en: "Targeted libraries for specific pathways, gene families, or custom gene sets",
          zh: "针对特定通路、基因家族或自定义基因集的靶向文库",
        },
      },
    ],
  },
  {
    key: "off-the-shelf-cell-lines",
    title: { en: "Off-the-Shelf Cell Lines", zh: "现货细胞株" },
    description: {
      en: "Pre-constructed and validated gene-edited cell lines ready for immediate use",
      zh: "预构建并验证的基因编辑细胞株，可即时使用",
    },
    icon: "cell-line",
    items: [
      {
        key: "ko-cell-lines",
        name: { en: "Knockout Cell Lines", zh: "敲除细胞株" },
        description: {
          en: "Validated gene knockout cell lines for commonly studied targets",
          zh: "经验证的常见研究靶点基因敲除细胞株",
        },
      },
    ],
  },
  {
    key: "software",
    title: { en: "Software Products", zh: "软件产品" },
    description: {
      en: "AI-driven research data analysis and knowledge management software",
      zh: "AI驱动的科研数据分析与知识管理软件",
    },
    icon: "software",
    items: [
      {
        key: "analysis-platform",
        name: { en: "Data Analysis Platform", zh: "数据分析平台" },
        description: {
          en: "Integrated platform for single-cell multi-omics data analysis and visualization",
          zh: "集成化的单细胞多组学数据分析与可视化平台",
        },
      },
    ],
  },
];

export const productsPageTitle: BilingualText = {
  en: "Products",
  zh: "产品中心",
};

export const productsPageSubtitle: BilingualText = {
  en: "Gene editing kits, sgRNA libraries, cell lines, and software tools",
  zh: "基因编辑试剂盒、sgRNA文库、细胞株与软件工具",
};
