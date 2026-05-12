import Link from "next/link";

type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function CalculatorCard({
  title,
  description,
  href,
}: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-black hover:shadow-xl"
    >
      <h3 className="text-3xl font-bold text-black">
        {title}
      </h3>

      <p className="mt-4 text-lg leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-8 inline-flex items-center text-lg font-semibold text-black">
        Open Calculator →
      </div>
    </Link>
  );
}