import CalculatorSection from "./CalculatorSection";
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
                data.interpretation?.map(
  (
    item: {
      category: string;
      range: string;
    },
    index: number
  ) => (
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
      {data.faqs.length > 0 && (
        <CalculatorSection title="Frequently Asked Questions">
          <div className="space-y-6">
            {data.faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </CalculatorSection>
      )}

      {/* RELATED CALCULATORS */}
      {data.relatedCalculators.length > 0 && (
        <CalculatorSection title="Related Calculators">
          <CalculatorRelated
            calculators={data.relatedCalculators}
          />
        </CalculatorSection>
      )}
    </div>
  );
}