import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Fast & Accurate
              <br />
              Online Calculators
            </h1>

            <p className="mt-5 text-base md:text-xl text-slate-600 leading-8 max-w-3xl">
              Free online calculators for health, finance, fitness,
              business, mathematics, GST, loans, investment,
              percentage, and daily life calculations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/calculators"
                className="px-7 py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition"
              >
                Explore Calculators
              </Link>

              <Link
                href="/health/bmi-calculator"
                className="px-7 py-3 rounded-2xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Try BMI Calculator
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* POPULAR CALCULATORS */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Popular Calculators
              </h2>

              <p className="mt-3 text-slate-600 text-sm md:text-lg">
                
              </p>
            </div>

            <div className="text-sm md:text-base text-slate-500">
              
            </div>

          </div>

          {/* COMPACT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

            {[
              {
                name: "BMI Calculator",
                link: "/health/bmi-calculator",
              },
              {
                name: "BMR Calculator",
                link: "/health/bmr-calculator",
              },
              {
                name: "Calorie Calculator",
                link: "/health/calorie-calculator",
              },
              {
                name: "Age Calculator",
                link: "/health/age",
              },
              {
                name: "Body Fat",
                link: "/health/body-fat-calculator",
              },
              {
                name: "Water Intake",
                link: "/health/water-intake",
              },
              {
                name: "Ideal Weight",
                link: "/health/ideal-weight",
              },
              {
                name: "Loan EMI",
                link: "/calculators",
              },
              {
                name: "GST Calculator",
                link: "/calculators",
              },
              {
                name: "SIP Calculator",
                link: "/calculators",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 hover:border-[#10b981] hover:shadow-md transition"
              >
                <div className="flex items-center justify-between gap-3">

                  <span className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
                    {item.name}
                  </span>

                  <span className="text-[#10b981] text-lg transition group-hover:translate-x-1">
                    →
                  </span>

                </div>
              </Link>
            ))}

            {/* VIEW ALL */}
            <Link
              href="/calculators"
              className="group rounded-2xl border border-[#10b981] bg-[#ecfdf5] px-4 py-4 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-3">

                <span className="text-sm md:text-base font-bold text-[#059669]">
                  View All
                </span>

                <span className="text-[#059669] text-lg transition group-hover:translate-x-1">
                  →
                </span>

              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-10 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Free Online Calculator Platform
          </h2>

          <p className="mt-6 text-slate-600 leading-8 text-base md:text-lg">
            Calculator Hub provides fast, accurate, and mobile-friendly
            online calculators for health, finance, fitness,
            business, mathematics, and daily calculations.
            All tools are designed for quick results,
            SEO performance, and responsive usage across
            desktop, tablet, and mobile devices.
          </p>

          <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
            Use our BMI Calculator, BMR Calculator,
            Calorie Calculator, Water Intake Calculator,
            Ideal Weight Calculator, and many more tools
            to simplify your daily calculations instantly.
          </p>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">

            {[
              {
                q: "What is Calculator Hub?",
                a: "Calculator Hub is a free online calculator platform offering health, finance, fitness, and math calculators."
              },
              {
                q: "Are these calculators free to use?",
                a: "Yes, all calculators on Calculator Hub are completely free and accessible on desktop and mobile devices."
              },
              {
                q: "How accurate are the calculators?",
                a: "Our calculators use standard formulas and modern calculation methods to provide accurate results."
              },
              {
                q: "Is Calculator Hub mobile friendly?",
                a: "Yes, all calculator pages are optimized for smartphones, tablets, and desktop screens."
              },
              {
                q: "What is BMI Calculator?",
                a: "BMI Calculator helps estimate body mass index using height, weight, age, and gender."
              },
              {
                q: "What is BMR Calculator?",
                a: "BMR Calculator estimates how many calories your body burns at rest daily."
              },
              {
                q: "How does Calorie Calculator work?",
                a: "Calorie Calculator estimates daily calorie intake based on activity level, age, height, weight, and goals."
              },
              {
                q: "Can I use calculators without signup?",
                a: "Yes, all tools can be used instantly without registration."
              },
              {
                q: "Are these calculators SEO optimized?",
                a: "Yes, Calculator Hub is designed with fast-loading and SEO-friendly structures."
              },
              {
                q: "Which categories are available?",
                a: "Calculator Hub includes health, finance, GST, percentage, investment, loan, and business calculators."
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.q}
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}