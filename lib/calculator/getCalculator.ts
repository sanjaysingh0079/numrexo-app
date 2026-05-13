import { calculators } from "@/data/calculators";

export function getCalculator(slug: string) {
  return calculators[slug as keyof typeof calculators];
}