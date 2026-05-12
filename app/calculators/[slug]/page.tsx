import { notFound } from "next/navigation";
import CalculatorPageLayout from "@/components/layout/CalculatorPageLayout";
import { buildCalculatorMetadata } from "@/components/seo/calculator-metadata";
import {
  getCalculatorMeta,
  isDynamicCalculatorSlug,
} from "@/config/calculators";
import { CalculatorContent } from "@/features/calculators/CalculatorContent";
import {
  DYNAMIC_CALCULATOR_SLUGS,
  type DynamicCalculatorSlug,
} from "@/types/calculator";

export function generateStaticParams(): { slug: DynamicCalculatorSlug }[] {
  return DYNAMIC_CALCULATOR_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  if (!isDynamicCalculatorSlug(slug)) {
    return {};
  }

  return buildCalculatorMetadata(getCalculatorMeta(slug));
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isDynamicCalculatorSlug(slug)) {
    notFound();
  }

  const meta = getCalculatorMeta(slug);

  return (
    <CalculatorPageLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/calculators" },
        { label: meta.title },
      ]}
      title={meta.title}
      tagline={meta.tagline}
    >
      <CalculatorContent slug={slug} />
    </CalculatorPageLayout>
  );
}
