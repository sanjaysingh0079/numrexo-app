type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CalculatorSection({
  title,
  children,
}: Props) {
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="mt-5">
        {children}
      </div>
    </section>
  );
}