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

export type CalculatorContent = {
  slug: string;

  title: string;

  description: string;

  category: string;

  whatIs?: string;

  inputs: CalculatorInput[];

  formula: CalculatorFormula;

  faqs: CalculatorFAQ[];

  relatedCalculators: RelatedCalculator[];
};

export type CalculatorData = CalculatorContent;

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