export type CalculatorInput = {

export type CalculatorTip = {
  title: string;
  description: string;
};

export type CalculatorInterpretation = {
  category: string;
  range: string;
  [key: string]: any;
};

export type CalculatorContent = {
  slug: string;

  title: string;

  description: string;

  category: string;

  shortDescription?: string;

  whatIs?: string;

  example?: string;

  resultLabel?: string;

  inputs: CalculatorInput[];

  formula: CalculatorFormula;

  steps?: CalculatorStep[];

  ranges?: CalculatorRange[];

  tips?: CalculatorTip[];

  interpretation?: CalculatorInterpretation[];

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