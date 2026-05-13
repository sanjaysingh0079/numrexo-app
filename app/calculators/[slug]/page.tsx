import { notFound } from "next/navigation";

import CalculatorEngine from "@/components/calculator/CalculatorEngine";

import { getCalculator } from "@/lib/calculator/getCalculator";

type Props = {
  params: {
    slug: string;
  };
};

export default function CalculatorPage({ params }: Props) {
  const data = getCalculator(params.slug);

  if (!data) {
    notFound();
  }

  return <CalculatorEngine data={data} />;
}