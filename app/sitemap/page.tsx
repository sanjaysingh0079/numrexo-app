import Link from "next/link";

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-14">

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Sitemap
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          Browse all important pages and calculators available on Numrixo.
        </p>

        <div className="mt-10 grid gap-4">

          {[
            { name: "Home", link: "/" },
            { name: "All Calculators", link: "/calculators" },
            { name: "Health Calculators", link: "/health" },
            { name: "BMI Calculator", link: "/calculators/bmi" },
            { name: "BMR Calculator", link: "/calculators/bmr" },
            { name: "Calorie Calculator", link: "/calculators/calorie" },
            { name: "Age Calculator", link: "/calculators/age" },
            { name: "Body Fat Calculator", link: "/calculators/body-fat" },
            { name: "Water Intake Calculator", link: "/calculators/water-intake" },
            { name: "Ideal Weight Calculator", link: "/calculators/ideal-weight" },
            { name: "About Us", link: "/about" },
            { name: "Terms of Use", link: "/terms" },
            { name: "Privacy Policy", link: "/privacy-policy" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="border border-slate-200 rounded-2xl px-5 py-4 hover:border-[#10b981] hover:bg-[#ecfdf5] transition"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}