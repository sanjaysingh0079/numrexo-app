// import CalculatorSection from "./CalculatorSection";
//             <table className="min-w-full border border-slate-200">
//               <thead className="bg-slate-100">
//                 <tr>
//                   <th className="border border-slate-200 px-4 py-3 text-left">
//                     Category
//                   </th>

//                   <th className="border border-slate-200 px-4 py-3 text-left">
//                     Range
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 data.interpretation?.map(
//   (
//     item: {
//       category: string;
//       range: string;
//     },
//     index: number
//   ) => (
//                   <tr key={index}>
//                     <td className="border border-slate-200 px-4 py-3">
//                       {item.category}
//                     </td>

//                     <td className="border border-slate-200 px-4 py-3">
//                       {item.range}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CalculatorSection>
//       )}

//       {/* FAQ */}
//       {data.faqs.length > 0 && (
//         <CalculatorSection title="Frequently Asked Questions">
//           <div className="space-y-6">
//             {data.faqs.map((faq, index) => (
//               <div key={index} className="space-y-2">
//                 <h3 className="text-lg font-semibold">
//                   {faq.question}
//                 </h3>

//                 <p>{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </CalculatorSection>
//       )}

//       {/* RELATED CALCULATORS */}
//       {data.relatedCalculators.length > 0 && (
//         <CalculatorSection title="Related Calculators">
//           <CalculatorRelated
//             calculators={data.relatedCalculators}
//           />
//         </CalculatorSection>
//       )}
//     </div>
//   );
// }




import CalculatorSection from "./CalculatorSection";
import CalculatorRelated from "./CalculatorRelated";

type InterpretationItem = {
  category: string;
  range: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type RelatedCalculator = {
  title: string;
  href: string;
};

type Formula = {
  title: string;
  formula: string;
  explanation: string;
};

type CalculatorContentType = {
  title: string;
  whatIs?: string;
  formula?: Formula;
  example?: string;
  interpretation?: InterpretationItem[];
  faqs: FAQ[];
  relatedCalculators: RelatedCalculator[];
};

type Props = {
  data: CalculatorContentType;
};

export default function CalculatorContent({
  data,
}: Props) {
  return (
    <div className="space-y-12">
      {/* WHAT IS */}
      {data.whatIs && (
        <CalculatorSection
          title={`What is ${data.title}?`}
        >
          <p>{data.whatIs}</p>
        </CalculatorSection>
      )}

      {/* FORMULA */}
      {data.formula && (
        <CalculatorSection
          title={data.formula.title}
        >
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-100 p-4 text-lg font-semibold overflow-x-auto">
              {data.formula.formula}
            </div>

            <p>{data.formula.explanation}</p>
          </div>
        </CalculatorSection>
      )}

      {/* EXAMPLE */}
      {data.example && (
        <CalculatorSection
          title="Example Calculation"
        >
          <p>{data.example}</p>
        </CalculatorSection>
      )}

      {/* INTERPRETATION TABLE */}
      {data.interpretation &&
        data.interpretation.length > 0 && (
          <CalculatorSection title="Result Interpretation">
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
                  {data.interpretation.map(
                    (item, index) => (
                      <tr key={index}>
                        <td className="border border-slate-200 px-4 py-3">
                          {item.category}
                        </td>

                        <td className="border border-slate-200 px-4 py-3">
                          {item.range}
                        </td>
                      </tr>
                    )
                  )}
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