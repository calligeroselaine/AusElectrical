export type WhyChooseUsIcon =
  | "ShieldCheck"
  | "FileCheck"
  | "Clock"
  | "Tag"
  | "Award"
  | "Zap"
  | "Smile"
  | "Building2";

export interface WhyChooseUsItem {
  icon: WhyChooseUsIcon;
  label: string;
}

export const whyChooseUs: WhyChooseUsItem[] = [
  { icon: "ShieldCheck", label: "Licensed Electrician" },
  { icon: "FileCheck", label: "Fully Insured" },
  { icon: "Clock", label: "Reliable" },
  { icon: "Tag", label: "Upfront Pricing" },
  { icon: "Award", label: "Quality Workmanship" },
  { icon: "Zap", label: "Fast Response" },
  { icon: "Smile", label: "Friendly Service" },
  { icon: "Building2", label: "Residential & Commercial" },
];
