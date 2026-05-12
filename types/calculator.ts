export const CALCULATOR_SLUGS = [
  "bmi",
  "age",
  "emi",
  "percentage",
  "gst",
  "sip",
] as const;

export type CalculatorSlug = (typeof CALCULATOR_SLUGS)[number];

/** Slugs handled by `/calculators/[slug]` (see dedicated `/calculators/bmi`, `/calculators/age`). */
export type DynamicCalculatorSlug = Exclude<CalculatorSlug, "bmi" | "age">;

export const DYNAMIC_CALCULATOR_SLUGS = CALCULATOR_SLUGS.filter(
  (slug): slug is DynamicCalculatorSlug => slug !== "bmi" && slug !== "age",
);
