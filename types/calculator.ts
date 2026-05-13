export type CalculatorInput = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
};

export type CalculatorFAQ = {
  question: string;
  answer: string;
};

export type RelatedCalculator = {
  title: string;
  href: string;
};

export type CalculatorFormula = {
  title: string;
  formula: string;
  explanation: string;
};

export type CalculatorData = {
  slug: string;
  title: string;
  description: string;
  category: string;

  inputs: CalculatorInput[];

  formula: CalculatorFormula;

  faqs: CalculatorFAQ[];

  relatedCalculators: RelatedCalculator[];
};

/**
 * Compatibility alias
 * Older components use CalculatorContent
 */
export type CalculatorContent = CalculatorData;

export const CALCULATOR_SLUGS = [
  "bmi-calculator",
  "bmr-calculator",
  "body-fat-calculator",
  "calorie-calculator",
] as const;

export const DYNAMIC_CALCULATOR_SLUGS = [
  ...CALCULATOR_SLUGS,
] as const;

export type CalculatorSlug =
  typeof CALCULATOR_SLUGS[number];

export type DynamicCalculatorSlug =
  typeof DYNAMIC_CALCULATOR_SLUGS[number];