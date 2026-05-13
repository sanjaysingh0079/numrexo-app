"use client";

import { useMemo, useState } from "react";

import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorSection from "@/components/calculator/CalculatorSection";
import CalculatorFormula from "@/components/calculator/CalculatorFormula";
import CalculatorFAQ from "@/components/calculator/CalculatorFAQ";
import CalculatorRelated from "@/components/calculator/CalculatorRelated";

import { bodyFatData } from "@/data/calculators/bodyFat";

export default function BodyFatCalculatorClient() {
  const [gender, setGender] = useState("male");

  const [unit, setUnit] = useState("metric");

  const [age, setAge] = useState(25);

  const [weight, setWeight] = useState(65);

  const [height, setHeight] = useState(175);

  const [neck, setNeck] = useState(35);

  const [waist, setWaist] = useState(85);

  const bodyFat = useMemo(() => {
    const result =
      86.01 * Math.log10(waist - neck) -
      70.041 * Math.log10(height) +
      36.76;

    return Number(result.toFixed(1));
  }, [waist, neck, height]);

  const fatMass = ((weight * bodyFat) / 100).toFixed(1);

  const leanMass = (weight - Number(fatMass)).toFixed(1);

  const category = useMemo(() => {
    if (gender === "male") {
      if (bodyFat < 6) return "Essential";
      if (bodyFat < 14) return "Athlete";
      if (bodyFat < 18) return "Fitness";
      if (bodyFat < 25) return "Average";
      return "Obese";
    }

    if (bodyFat < 14) return "Essential";
    if (bodyFat < 21) return "Athlete";
    if (bodyFat < 25) return "Fitness";
    if (bodyFat < 32) return "Average";

    return "Obese";
  }, [bodyFat, gender]);

  return (
    <main className="min-h-screen bg-slate-50 py-4 md:py-10">
      <section className="mx-auto max-w-6xl px-4">

        <CalculatorHero
          category="Health Calculator"
          title="Body Fat Calculator"
          description="Calculate body fat percentage using the U.S. Navy Method. Fast, accurate, mobile-friendly, and SEO optimized."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">

            <div className="flex gap-3">
              <button
                onClick={() => setUnit("metric")}
                className={`rounded-xl px-5 py-3 font-semibold ${
                  unit === "metric"
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Metric
              </button>

              <button
                onClick={() => setUnit("imperial")}
                className={`rounded-xl px-5 py-3 font-semibold ${
                  unit === "imperial"
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Imperial
              </button>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setGender("male")}
                className={`rounded-xl px-5 py-3 font-semibold ${
                  gender === "male"
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Male
              </button>

              <button
                onClick={() => setGender("female")}
                className={`rounded-xl px-5 py-3 font-semibold ${
                  gender === "female"
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Female
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Age
                </label>

                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Weight ({unit === "metric" ? "kg" : "lb"})
                </label>

                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Height ({unit === "metric" ? "cm" : "in"})
                </label>

                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Neck ({unit === "metric" ? "cm" : "in"})
                </label>

                <input
                  type="number"
                  value={neck}
                  onChange={(e) => setNeck(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium">
                Waist ({unit === "metric" ? "cm" : "in"})
              </label>

              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">

            <p className="text-lg font-semibold text-emerald-600">
              Your Result
            </p>

            <div className="mt-4 rounded-2xl bg-emerald-50 p-6">
              <h2 className="text-5xl font-bold text-slate-900">
                {bodyFat}%
              </h2>

              <p className="mt-2 text-lg text-slate-600">
                Body Fat Percentage
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-full">
              <div className="flex h-5">
                <div className="w-1/5 bg-red-500"></div>
                <div className="w-1/5 bg-yellow-400"></div>
                <div className="w-1/5 bg-emerald-500"></div>
                <div className="w-1/5 bg-blue-500"></div>
                <div className="w-1/5 bg-black"></div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">

              <div className="flex items-center justify-between border-b px-5 py-4">
                <span>Category</span>
                <span className="font-bold">{category}</span>
              </div>

              <div className="flex items-center justify-between border-b px-5 py-4">
                <span>Fat Mass</span>
                <span className="font-bold">{fatMass} kg</span>
              </div>

              <div className="flex items-center justify-between border-b px-5 py-4">
                <span>Lean Mass</span>
                <span className="font-bold">{leanMass} kg</span>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <span>Ideal Fat To Lose</span>
                <span className="font-bold">3.6 kg</span>
              </div>

            </div>

          </div>

        </div>

        {/* SEO CONTENT */}

        <CalculatorSection title="What is Body Fat Calculator?">
          <p className="text-slate-600 leading-8">
            A body fat calculator estimates the percentage of fat in your body
            using measurements like waist, neck, height, and weight.
          </p>
        </CalculatorSection>

        <CalculatorFormula formula={bodyFatData.formula} />

        <CalculatorSection title="Benefits">
          <ul className="list-disc space-y-3 pl-6 text-slate-600">
            <li>Track fitness progress</li>
            <li>Monitor healthy body composition</li>
            <li>Useful for fat loss goals</li>
            <li>Helps athletes optimize performance</li>
          </ul>
        </CalculatorSection>

        <CalculatorSection title="FAQs">
          <CalculatorFAQ faqs={bodyFatData.faqs} />
        </CalculatorSection>

        <CalculatorSection title="Related Calculators">
          <CalculatorRelated
            calculators={bodyFatData.relatedCalculators}
          />
        </CalculatorSection>

      </section>
    </main>
  );
}