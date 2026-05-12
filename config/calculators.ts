import type { CalculatorSlug, DynamicCalculatorSlug } from "@/types/calculator";
import { CALCULATOR_SLUGS, DYNAMIC_CALCULATOR_SLUGS } from "@/types/calculator";

export type { CalculatorSlug, DynamicCalculatorSlug };

export interface CalculatorMeta {
  slug: CalculatorSlug;
  title: string;
  tagline: string;
  seoDescription: string;
  seoKeywords?: string[];
}

export const CALCULATOR_REGISTRY: Record<CalculatorSlug, CalculatorMeta> = {
  bmi: {
    slug: "bmi",
    title: "BMI Calculator",
    tagline: "Estimate body mass index from height and weight.",
    seoDescription:
      "Free BMI calculator — enter height and weight to see your BMI category and trends on any device.",
    seoKeywords: ["BMI calculator", "body mass index", "health calculator"],
  },
  age: {
    slug: "age",
    title: "Age Calculator",
    tagline: "Exact age between two dates.",
    seoDescription:
      "Calculate exact age in years, months, and days from birth date to today or a custom reference date.",
    seoKeywords: ["age calculator", "date calculator", "birthday age"],
  },
  emi: {
    slug: "emi",
    title: "Loan EMI Calculator",
    tagline: "Monthly loan payment estimate.",
    seoDescription:
      "Estimate EMI, total interest, and amortization overview for loans with principal, rate, and tenure.",
    seoKeywords: ["EMI calculator", "loan EMI", "mortgage payment"],
  },
  percentage: {
    slug: "percentage",
    title: "Percentage Calculator",
    tagline: "Percent change, ratios, and of/total calculations.",
    seoDescription:
      "Quick percentage tools for discounts, markup, proportion, and percentage change problems.",
    seoKeywords: ["percentage calculator", "percent change"],
  },
  gst: {
    slug: "gst",
    title: "GST Calculator",
    tagline: "Add or remove GST with configurable rates.",
    seoDescription:
      "Compute GST-exclusive and GST-inclusive amounts for common tax rates on invoices and purchases.",
    seoKeywords: ["GST calculator", "tax calculator", "exclusive inclusive GST"],
  },
  sip: {
    slug: "sip",
    title: "SIP Calculator",
    tagline: "Systematic investment plan projections.",
    seoDescription:
      "Project SIP maturity value using monthly investment, expected return, and time horizon placeholders.",
    seoKeywords: ["SIP calculator", "mutual fund SIP", "investment calculator"],
  },
};

export function isCalculatorSlug(slug: string): slug is CalculatorSlug {
  return (CALCULATOR_SLUGS as readonly string[]).includes(slug);
}

export function isDynamicCalculatorSlug(slug: string): slug is DynamicCalculatorSlug {
  return (DYNAMIC_CALCULATOR_SLUGS as readonly string[]).includes(slug);
}

export function getCalculatorMeta(slug: CalculatorSlug): CalculatorMeta {
  return CALCULATOR_REGISTRY[slug];
}
