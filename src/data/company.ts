import type { BilingualText } from "../i18n/utils";

export interface CompanyInfo {
  name: BilingualText;
  tagline: BilingualText;
  email: string;
  phone: string;
  address: BilingualText;
  icp: string;
  copyright: string;
}

export const company: CompanyInfo = {
  name: {
    en: "BioTech Genomics",
    zh: "伯泰基因",
  },
  tagline: {
    en: "From Gene Editing to Single-Cell Omics",
    zh: "从基因编辑到单细胞组学",
  },
  email: "contact@biotech-genomics.com",
  phone: "+86 400-XXX-XXXX",
  address: {
    en: "Building X, Tech Park, City, Province, China",
    zh: "XX省XX市XX科技园X号楼",
  },
  icp: "京ICP备XXXXXXXX号",
  copyright: "© 2025 BioTech Genomics",
};
