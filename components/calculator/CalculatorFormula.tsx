type FormulaProps = {
  formula: {
    title: string;
    formula: string;
    explanation: string;
  };
};

export default function CalculatorFormula({
  formula,
}: FormulaProps) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-3xl font-bold text-slate-900">
        {formula.title}
      </h2>

      <div className="mt-6 rounded-xl bg-slate-100 p-6">
        <p className="text-2xl font-semibold text-emerald-600">
          {formula.formula}
        </p>
      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {formula.explanation}
      </p>
    </section>
  );
}