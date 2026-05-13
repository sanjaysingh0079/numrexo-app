type Props = {
  category: string;
  title: string;
  description: string;
};

export default function CalculatorHero({
  category,
  title,
  description,
}: Props) {
  return (
    <div className="mb-5 md:mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-600">
        {category}
      </p>

      <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}