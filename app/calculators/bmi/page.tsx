"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function BmiCalculatorPage() {
  const [unit, setUnit] = useState("metric");

  const [height, setHeight] = useState(170);

  const [weight, setWeight] = useState(70);

  const [age, setAge] = useState(25);

  const [gender, setGender] = useState("male");

  const [showResult, setShowResult] = useState(false);

  const bmi = useMemo(() => {
    const meterHeight = height / 100;

    return (
      weight / (meterHeight * meterHeight)
    ).toFixed(1);
  }, [height, weight]);

  const bmiValue = Number(bmi);

  let category = "Normal";
  let color = "emerald";

  if (bmiValue < 18.5) {
    category = "Underweight";
    color = "blue";
  } else if (bmiValue >= 25 && bmiValue < 30) {
    category = "Overweight";
    color = "yellow";
  } else if (bmiValue >= 30) {
    category = "Obese";
    color = "red";
  }

  const faqs = [
    {
      q: "What is BMI?",
      a: "BMI means Body Mass Index. It estimates body weight category using height and weight.",
    },
    {
      q: "What is a healthy BMI range?",
      a: "A healthy BMI range for adults is usually between 18.5 and 24.9.",
    },
    {
      q: "Can BMI detect body fat accurately?",
      a: "BMI is a screening tool. It may not perfectly estimate body fat for athletes or muscular individuals.",
    },
    {
      q: "Why is BMI important?",
      a: "BMI helps identify underweight, healthy weight, overweight, and obesity risks.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-2 md:py-8">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        {/* MAIN CARD */}
        <section className="rounded-[22px] border border-slate-200 bg-white p-3 md:p-7 shadow-sm">
          {/* HEADER */}
          <div className="mb-3 md:mb-5">
            <h1 className="text-[32px] md:text-5xl leading-none font-bold text-slate-900">
              BMI Calculator
            </h1>

            <p className="mt-2 text-[13px] md:text-base text-slate-600 leading-5 md:leading-7">
              Calculate your Body Mass Index instantly.
            </p>
          </div>

          {/* UNIT */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setUnit("metric")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                unit === "metric"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              Metric
            </button>

            <button
              onClick={() => setUnit("imperial")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                unit === "imperial"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              Imperial
            </button>
          </div>

          {/* INPUTS */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {/* HEIGHT */}
            <div>
              <label className="mb-1 block text-[11px] md:text-sm font-semibold text-slate-700">
                Height
              </label>

              <input
                type="number"
                value={height}
                onChange={(e) =>
                  setHeight(Number(e.target.value))
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:px-5 md:py-3 text-sm outline-none focus:border-emerald-500"
              />
            </div>

            {/* WEIGHT */}
            <div>
              <label className="mb-1 block text-[11px] md:text-sm font-semibold text-slate-700">
                Weight
              </label>

              <input
                type="number"
                value={weight}
                onChange={(e) =>
                  setWeight(Number(e.target.value))
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:px-5 md:py-3 text-sm outline-none focus:border-emerald-500"
              />
            </div>

            {/* AGE */}
            <div>
              <label className="mb-1 block text-[11px] md:text-sm font-semibold text-slate-700">
                Age
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) =>
                  setAge(Number(e.target.value))
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:px-5 md:py-3 text-sm outline-none focus:border-emerald-500"
              />
            </div>

            {/* GENDER */}
            <div>
              <label className="mb-1 block text-[11px] md:text-sm font-semibold text-slate-700">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`rounded-xl py-2 text-sm font-semibold ${
                    gender === "male"
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100"
                  }`}
                >
                  Male
                </button>

                <button
                  onClick={() => setGender("female")}
                  className={`rounded-xl py-2 text-sm font-semibold ${
                    gender === "female"
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowResult(true)}
            className="mt-3 w-full rounded-xl bg-emerald-500 py-2.5 md:py-4 text-sm md:text-lg font-bold text-white transition hover:bg-emerald-600"
          >
            Calculate BMI
          </button>

          {/* RESULT */}
          {showResult && (
            <div
              className={`mt-3 rounded-2xl p-4 md:p-6 ${
                color === "blue"
                  ? "bg-blue-50"
                  : color === "yellow"
                  ? "bg-yellow-50"
                  : color === "red"
                  ? "bg-red-50"
                  : "bg-emerald-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-semibold text-slate-700">
                    Your BMI
                  </p>

                  <h2 className="mt-1 text-4xl md:text-6xl font-extrabold text-slate-900">
                    {bmi}
                  </h2>

                  <p className="mt-1 text-sm md:text-base font-semibold text-slate-700">
                    {category}
                  </p>
                </div>

                <div
                  className={`h-20 w-20 md:h-28 md:w-28 rounded-full border-[6px] flex items-center justify-center text-lg md:text-2xl font-bold ${
                    color === "blue"
                      ? "border-blue-500 text-blue-600"
                      : color === "yellow"
                      ? "border-yellow-500 text-yellow-600"
                      : color === "red"
                      ? "border-red-500 text-red-600"
                      : "border-emerald-500 text-emerald-600"
                  }`}
                >
                  {bmi}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white p-3 text-center">
                  <p className="text-[11px] text-slate-500">
                    Healthy Min
                  </p>

                  <p className="mt-1 text-sm md:text-lg font-bold text-slate-900">
                    18.5
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3 text-center">
                  <p className="text-[11px] text-slate-500">
                    Healthy Max
                  </p>

                  <p className="mt-1 text-sm md:text-lg font-bold text-slate-900">
                    24.9
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3 text-center">
                  <p className="text-[11px] text-slate-500">
                    BMI Prime
                  </p>

                  <p className="mt-1 text-sm md:text-lg font-bold text-slate-900">
                    {(bmiValue / 25).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* WHAT IS BMI */}
        <section className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 md:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            What is BMI?
          </h2>

          <p className="mt-3 text-sm md:text-lg leading-7 text-slate-600">
            BMI (Body Mass Index) is a measurement
            calculated using height and weight. It
            helps determine whether your body weight
            falls within a healthy range.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 md:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            BMI Calculator FAQs
          </h2>

          <div className="mt-4 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="rounded-xl border border-slate-200 p-4"
              >
                <summary className="cursor-pointer text-sm md:text-base font-semibold text-slate-900">
                  {faq.q}
                </summary>

                <p className="mt-3 text-sm md:text-base leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED */}
        <section className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 md:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Related Health Calculators
          </h2>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/calculators/bmr"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
            >
              <h3 className="font-bold text-sm md:text-base text-slate-900">
                BMR Calculator
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Calculate daily calorie burn.
              </p>
            </Link>

            <Link
              href="/calculators/calorie"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
            >
              <h3 className="font-bold text-sm md:text-base text-slate-900">
                Calorie Calculator
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Estimate calorie intake.
              </p>
            </Link>

            <Link
              href="/calculators/body-fat"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
            >
              <h3 className="font-bold text-sm md:text-base text-slate-900">
                Body Fat
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Estimate body fat %.
              </p>
            </Link>

            <Link
              href="/calculators/ideal-weight"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
            >
              <h3 className="font-bold text-sm md:text-base text-slate-900">
                Ideal Weight
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Find healthy body weight.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}