import Link from "next/link";

type RelatedCalculator = {
  title: string;
  href: string;
};

type Props = {
  calculators: RelatedCalculator[];
};

export default function CalculatorRelated({
  calculators,
}: Props) {
  if (!calculators || calculators.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {calculators.map((calculator, index) => (
        <Link
          key={index}
          href={calculator.href}
          className="rounded-xl border border-slate-200 p-4 transition hover:border-slate-400 hover:bg-slate-50"
        >
          <h3 className="font-medium">
            {calculator.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}