import Link from "next/link";

const calculators = [
  {
    name: "BMI Calculator",
    href: "/calculators/bmi",
  },
  {
    name: "BMR Calculator",
    href: "/calculators/bmr",
  },
  {
    name: "Calorie Calculator",
    href: "/calculators/calorie",
  },
  {
    name: "Body Fat Calculator",
    href: "/calculators/body-fat",
  },
  {
    name: "Ideal Weight",
    href: "/calculators/ideal-weight",
  },
  {
    name: "Water Intake",
    href: "/calculators/water-intake",
  },
  {
    name: "Age Calculator",
    href: "/calculators/age",
  },
];

export default function AllCalculatorsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f9] py-8 md:py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mb-8 md:mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-tight">
            All Calculators
          </h1>

          <p className="mt-4 text-base md:text-xl text-slate-600 max-w-4xl leading-8">
            Explore free online calculators for health, fitness, finance,
            business, age, BMI, calorie intake, BMR, body fat,
            hydration, and more.
          </p>
        </section>

        {/* CALCULATORS */}
        <section>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

            {calculators.map((calculator, index) => (
              <Link
                key={index}
                href={calculator.href}
                className="group rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition hover:-translate-y-1 hover:border-[#10b981] hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">

                  <h2 className="text-sm md:text-base font-bold text-slate-800 leading-6">
                    {calculator.name}
                  </h2>

                  <span className="text-[#10b981] text-lg transition group-hover:translate-x-1">
                    →
                  </span>

                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="mt-14 rounded-[28px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Free Online Calculator Hub
          </h2>

          <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
            Calculator Hub provides free online calculators for health,
            fitness, body measurements, calorie tracking, BMI,
            metabolism, hydration, age calculation, and more.
          </p>

          <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
            All calculators are mobile-friendly, SEO optimized,
            responsive, fast-loading, and designed for accurate
            real-time calculations.
          </p>
{/* FAQ SECTION */}
<section className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">

  <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
    Calculator FAQs
  </h2>

  <div className="mt-8 space-y-5">

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        What is Calculator Hub?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Calculator Hub is a free online platform that provides health,
        fitness, finance, age, body measurement, and daily life calculators.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Are these calculators free to use?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Yes, all calculators available on Calculator Hub are completely free
        and accessible on desktop, tablet, and mobile devices.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        How accurate are online calculators?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Our calculators use standard scientific and mathematical formulas to
        provide highly accurate results instantly.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        What is a BMI Calculator?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        A BMI Calculator estimates body mass index using height and weight to
        determine whether a person is underweight, normal, overweight, or obese.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        What does a BMR Calculator do?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        A BMR Calculator estimates the number of calories your body burns at
        rest to maintain essential body functions.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        How does a Calorie Calculator work?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        A Calorie Calculator estimates your daily calorie needs based on age,
        gender, height, weight, and activity level.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Can I use these calculators on mobile?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Yes, all calculators are fully responsive and optimized for mobile,
        tablet, and desktop devices.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Which health calculators are available?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Available health calculators include BMI Calculator, BMR Calculator,
        Calorie Calculator, Body Fat Calculator, Water Intake Calculator,
        Ideal Weight Calculator, and more.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Are the calculators SEO optimized?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Yes, every calculator page is designed with SEO-friendly structure,
        optimized headings, fast loading speed, and mobile responsiveness.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Do calculators work instantly?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Yes, all calculations are processed instantly in real time without page
        reloads for a smooth user experience.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        What is the best online calculator website?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        A good calculator website should be fast, mobile-friendly,
        easy to use, accurate, SEO optimized, and provide multiple
        categories of calculators in one place.
      </p>
    </details>

    <details className="group rounded-2xl border border-slate-200 p-5">
      <summary className="cursor-pointer list-none font-bold text-lg text-slate-900">
        Why should I use Calculator Hub?
      </summary>

      <p className="mt-3 text-slate-600 leading-8">
        Calculator Hub offers clean UI, fast loading calculators,
        accurate formulas, responsive design, and a growing collection
        of useful online calculation tools.
      </p>
    </details>

  </div>

</section>
        </section>

      </div>
    </main>
  );
}