import CalculatorSection from "./CalculatorSection";
import CalculatorFormula from "./CalculatorFormula";
import CalculatorFAQ from "./CalculatorFAQ";
import CalculatorRelated from "./CalculatorRelated";

import { CalculatorContent as CalculatorContentType } from "@/types/calculator";

type Props = {
  data: CalculatorContentType;
};

export default function CalculatorContent({
  data,
}: Props) {
  return (
    <>
      {/* WHAT IS */}
      <CalculatorSection title={`What is ${data.title}?`}>
        <p>{data.whatIs}</p>
      </CalculatorSection>

      {/* FORMULA */}
      <CalculatorSection title="Formula Explanation">
        <CalculatorFormula formula={data.formula} />
      </CalculatorSection>

      {/* EXAMPLE */}
      <CalculatorSection title="Example Calculation">
        <p>{data.example}</p>
      </CalculatorSection>

      {/* INTERPRETATION */}
      <CalculatorSection title="Interpretation Table">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Category
                </th>

                <th className="border border-slate-200 px-4 py-3 text-left">
                  Range
                </th>
              </tr>
            </thead>

            <tbody>
              {data.interpretation.map((item) => (
                <tr key={item.category}>
                  <td className="border border-slate-200 px-4 py-3">
                    {item.category}
                  </td>

                  <td className="border border-slate-200 px-4 py-3">
                    {item.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CalculatorSection>

      {/* BENEFITS */}
      <CalculatorSection title="Benefits & Use Cases">
        <ul className="space-y-3">
          {data.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </CalculatorSection>

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
    </>
  );
}