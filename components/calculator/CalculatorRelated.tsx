import Link from "next/link";

type Related = {
  name: string;
  href: string;
};

type Props = {
  calculators: Related[];
};

export default function CalculatorRelated({
  calculators,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {calculators.map((calculator) => (
        <Link
          key={calculator.href}
          href={calculator.href}
          className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-500"
        >
          <h3 className="font-semibold text-slate-900">
            {calculator.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}