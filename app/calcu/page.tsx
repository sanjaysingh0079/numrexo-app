import Link from "next/link";
import CalculatorCard from "@/components/calculator/CalculatorCard";
import { healthCalculators } from "@/data/calculators/health";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* HERO SECTION */}
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Health Calculators
          </h1>

          <p className="mt-6 text-xl leading-9 text-gray-700">
            Explore free online health calculators for BMI,
            calorie intake, body fat percentage, BMR,
            metabolism, ideal body weight, hydration, and
            overall fitness tracking.
          </p>
        </div>

        {/* CALCULATOR GRID */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-black">
            Popular Health Calculators
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.title}
                title={calculator.title}
                description={calculator.description}
                href={calculator.href}
              />
            ))}
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="mt-24 max-w-5xl">
          <h2 className="text-4xl font-bold text-black">
            Free Online Health & Fitness Tools
          </h2>

          <div className="mt-8 space-y-8 text-lg leading-9 text-gray-700">
            <p>
              Health calculators help estimate important body
              and fitness measurements such as body mass index
              (BMI), calorie intake, body fat percentage,
              metabolic rate, hydration needs, and ideal body
              weight.
            </p>

            <p>
              These tools are commonly used for weight loss,
              fitness planning, bodybuilding, healthy lifestyle
              management, and overall wellness tracking.
            </p>

            <p>
              Our calculators are designed to be fast,
              mobile-friendly, accurate, and easy to use on
              all devices including smartphones, tablets, and
              desktops.
            </p>

            <p>
              Whether you want to improve fitness goals,
              maintain healthy body weight, or estimate calorie
              requirements, these health calculators provide
              instant results using modern formulas and
              standards.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mt-24 max-w-5xl">
          <h2 className="text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-6">

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                What is BMI?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                BMI (Body Mass Index) estimates body weight
                relative to height. Use our{" "}
                <Link
                  href="/calculators/bmi"
                  className="font-semibold underline"
                >
                  BMI Calculator
                </Link>{" "}
                to calculate your BMI instantly.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                What is a healthy BMI range?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                A healthy BMI range for most adults is between
                18.5 and 24.9. BMI categories help identify
                underweight, normal weight, overweight, and
                obesity levels.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                What is BMR?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                BMR stands for Basal Metabolic Rate. It
                estimates how many calories your body burns at
                rest. Try our{" "}
                <Link
                  href="/calculators/bmr"
                  className="font-semibold underline"
                >
                  BMR Calculator
                </Link>.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                How many calories should I eat daily?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Daily calorie intake depends on age, weight,
                activity level, and goals. Use our{" "}
                <Link
                  href="/calculators/calorie"
                  className="font-semibold underline"
                >
                  Calorie Calculator
                </Link>{" "}
                to estimate calorie requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                What is body fat percentage?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Body fat percentage estimates how much of your
                body consists of fat tissue. Use our{" "}
                <Link
                  href="/calculators/body-fat"
                  className="font-semibold underline"
                >
                  Body Fat Calculator
                </Link>{" "}
                for body composition analysis.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                Which calculator is best for weight loss?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Most users combine the{" "}
                <Link
                  href="/calculators/bmi"
                  className="font-semibold underline"
                >
                  BMI Calculator
                </Link>{" "}
                and{" "}
                <Link
                  href="/calculators/calorie"
                  className="font-semibold underline"
                >
                  Calorie Calculator
                </Link>{" "}
                for weight management planning.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                Are online health calculators accurate?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Most calculators provide reliable estimates
                using standard health formulas. However, they
                should not replace professional medical advice.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                Can athletes use BMI calculators?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Athletes may receive misleading BMI results
                because BMI does not directly measure muscle
                mass or body composition.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                How much water should I drink daily?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Water intake depends on body weight, climate,
                and activity level. Use our{" "}
                <Link
                  href="/calculators/water-intake"
                  className="font-semibold underline"
                >
                  Water Intake Calculator
                </Link>{" "}
                to estimate hydration needs.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold">
                Are these health calculators free?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Yes. All health calculators on our platform are
                completely free, mobile responsive, and easy to
                access without registration.
              </p>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
}