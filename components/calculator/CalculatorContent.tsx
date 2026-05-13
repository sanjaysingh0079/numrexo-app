import CalculatorSection from "./CalculatorSection";
import CalculatorRelated from "./CalculatorRelated";
import type { CalculatorContent as CalculatorContentType } from "@/types/calculator";

type Props = {
  data: CalculatorContentType;
};

export default function CalculatorContent({ data }: Props) {
  return (
    <div className="space-y-10">

      {/* WHAT IS */}
      {data.whatIs && (
        <CalculatorSection title={`What is ${data.title}?`}>
          <p>{data.whatIs}</p>
        </CalculatorSection>
      )}

      {/* FORMULA */}
      {data.formula && (
        <CalculatorSection title={data.formula.title}>
          <div className="space-y-3">
            <div className="rounded-xl bg-slate-100 p-4 font-mono text-lg">
              {data.formula.formula}
            </div>

            <p>{data.formula.explanation}</p>
          </div>
        </CalculatorSection>
      )}

      {/* EXAMPLE */}
      {data.example && (
        <CalculatorSection title="Example">
          <p>{data.example}</p>
        </CalculatorSection>
      )}

      {/* INTERPRETATION */}
      {data.interpretation &&
        Array.isArray(data.interpretation) &&
        data.interpretation.length > 0 && (
          <CalculatorSection title="Interpretation">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left">
                      Category
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left">
                      Range
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.interpretation.map((item, index) => (
                    <tr key={index}>
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
        )}

      {/* FAQ */}
      {data.faqs &&
        data.faqs.length > 0 && (
          <CalculatorSection title="Frequently Asked Questions">
            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    {faq.question}
                  </h3>

                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </CalculatorSection>
        )}

      {/* RELATED */}
      {data.relatedCalculators &&
        data.relatedCalculators.length > 0 && (
          <CalculatorSection title="Related Calculators">
            <CalculatorRelated
              calculators={data.relatedCalculators}
            />
          </CalculatorSection>
        )}
    </div>
  );
}