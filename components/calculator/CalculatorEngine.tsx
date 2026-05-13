import CalculatorHero from "./CalculatorHero";
import CalculatorFAQ from "./CalculatorFAQ";
import CalculatorFormula from "./CalculatorFormula";
import CalculatorRelated from "./CalculatorRelated";
import CalculatorSection from "./CalculatorSection";

import { CalculatorData } from "@/types/calculator";

type Props = {
  data: CalculatorData;
  children?: React.ReactNode;
};

export default function CalculatorEngine({
  data,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-50 py-4 md:py-10">
      <section className="mx-auto max-w-6xl px-4">

        {/* HERO */}
        <CalculatorHero
          category={data.category}
          title={data.title}
          description={data.description}
        />

        {/* FORM */}
        {children}

        {/* WHAT IS */}
        <CalculatorSection title={`What is ${data.title}?`}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="leading-8 text-slate-600">
              {data.description}
            </p>
          </div>
        </CalculatorSection>

        {/* FORMULA */}
        <CalculatorFormula formula={data.formula} />

        {/* FAQ */}
        <CalculatorSection title="FAQs">
          <CalculatorFAQ faqs={data.faqs} />
        </CalculatorSection>

        {/* RELATED */}
        <CalculatorSection title="Related Calculators">
          <CalculatorRelated
            calculators={data.relatedCalculators}
          />
        </CalculatorSection>

      </section>
    </main>
  );
}