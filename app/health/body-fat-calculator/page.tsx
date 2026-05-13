import { generateSeo } from "@/lib/seo/generateMetadata";

import BodyFatCalculatorClient from "./BodyFatCalculatorClient";

import { bodyFatData } from "@/data/calculators/bodyFat";

export const metadata = generateSeo({
  title: bodyFatData.metaTitle,
  description: bodyFatData.metaDescription,
  path: "/health/body-fat-calculator",
});

export default function Page() {
  return <BodyFatCalculatorClient />;
}