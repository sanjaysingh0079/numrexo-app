import CalculatorPageLayout from "@/components/layout/CalculatorPageLayout";
import { buildCalculatorMetadata } from "@/components/seo/calculator-metadata";
import { getCalculatorMeta } from "@/config/calculators";
import { AgeCalculatorClient } from "@/features/calculators/age/AgeCalculatorClient";

const meta = getCalculatorMeta("bmi");

export const metadata = buildCalculatorMetadata(meta);

export default function AgeCalculatorPage() {
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
      <AgeCalculatorClient />
    </CalculatorPageLayout>
  );
}
