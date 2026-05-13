type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function CalculatorFAQ({
  faqs,
}: Props) {
  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 p-5"
        >
          <h3 className="font-semibold text-slate-900">
            {faq.question}
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}