"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function calculateMifflin(
  gender: string,
  weight: number,
  height: number,
  age: number
) {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateHarris(
  gender: string,
  weight: number,
  height: number,
  age: number
) {
  if (gender === "male") {
    return (
      88.362 +
      13.397 * weight +
      4.799 * height -
      5.677 * age
    );
  }

  return (
    447.593 +
    9.247 * weight +
    3.098 * height -
    4.33 * age
  );
}

function calculateKatch(weight: number, bodyFat: number) {
  const leanMass = weight * (1 - bodyFat / 100);

  return 370 + 21.6 * leanMass;
}

export default function BmrPage() {
  const [unit, setUnit] = useState("metric");

  const [formula, setFormula] = useState("mifflin");

  const [gender, setGender] = useState("male");

  const [age, setAge] = useState(25);

  const [height, setHeight] = useState(180);

  const [weight, setWeight] = useState(70);

  const [bodyFat, setBodyFat] = useState(20);

  const [showResult, setShowResult] = useState(false);

  const bmr = useMemo(() => {
    if (formula === "mifflin") {
      return calculateMifflin(
        gender,
        weight,
        height,
        age
      );
    }

    if (formula === "harris") {
      return calculateHarris(
        gender,
        weight,
        height,
        age
      );
    }

    return calculateKatch(weight, bodyFat);
  }, [
    formula,
    gender,
    weight,
    height,
    age,
    bodyFat,
  ]);

  const activityLevels = [
    {
      label: "Sedentary",
      value: 1.2,
    },
    {
      label: "Light Exercise",
      value: 1.375,
    },
    {
      label: "Moderate Exercise",
      value: 1.55,
    },
    {
      label: "Heavy Exercise",
      value: 1.725,
    },
    {
      label: "Athlete",
      value: 1.9,
    },
  ];

  const faqs = [
    {
      q: "What is BMR?",
      a: "BMR means Basal Metabolic Rate. It estimates how many calories your body burns while resting.",
    },
    {
      q: "Why is BMR important?",
      a: "BMR helps estimate daily calorie needs for weight loss, maintenance, and muscle gain.",
    },
    {
      q: "Which BMR formula is best?",
      a: "Mifflin St Jeor is considered highly accurate for most people.",
    },
    {
      q: "What is the difference between BMR and TDEE?",
      a: "BMR is resting calories while TDEE includes activity calories.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-2 md:py-8">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        {/* MAIN CALCULATOR */}
        <section className="rounded-[22px] border border-slate-200 bg-white p-3 md:p-7 shadow-sm">
          {/* TITLE */}
          <div className="mb-3 md:mb-5">
            <h1 className="text-[32px] md:text-5xl leading-none font-bold text-slate-900">
              BMR Calculator
            </h1>

            <p className="mt-2 text-[13px] md:text-base text-slate-600 leading-5 md:leading-7">
              Calculate your Basal Metabolic Rate and
              daily calorie needs instantly.
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

          {/* FORMULA */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <button
              onClick={() => setFormula("mifflin")}
              className={`rounded-xl border px-2 py-2 text-[11px] md:text-sm font-semibold ${
                formula === "mifflin"
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                  : "border-slate-200"
              }`}
            >
              Mifflin
            </button>

            <button
              onClick={() => setFormula("harris")}
              className={`rounded-xl border px-2 py-2 text-[11px] md:text-sm font-semibold ${
                formula === "harris"
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                  : "border-slate-200"
              }`}
            >
              Harris
            </button>

            <button
              onClick={() => setFormula("katch")}
              className={`rounded-xl border px-2 py-2 text-[11px] md:text-sm font-semibold ${
                formula === "katch"
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                  : "border-slate-200"
              }`}
            >
              Katch
            </button>
          </div>

          {/* INPUTS */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
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
          </div>

          {/* BODY FAT */}
          {formula === "katch" && (
            <div className="mt-2">
              <label className="mb-1 block text-[11px] md:text-sm font-semibold text-slate-700">
                Body Fat %
              </label>

              <input
                type="number"
                value={bodyFat}
                onChange={(e) =>
                  setBodyFat(Number(e.target.value))
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:px-5 md:py-3 text-sm outline-none focus:border-emerald-500"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={() => setShowResult(true)}
            className="mt-3 w-full rounded-xl bg-emerald-500 py-2.5 md:py-4 text-sm md:text-lg font-bold text-white transition hover:bg-emerald-600"
          >
            Calculate BMR
          </button>

          {/* RESULT */}
          {showResult && (
            <>
              <div className="mt-3 rounded-2xl bg-emerald-50 p-4 md:p-6">
                <p className="text-xs md:text-sm font-semibold text-emerald-700">
                  Your BMR
                </p>

                <h2 className="mt-1 text-4xl md:text-6xl font-extrabold text-slate-900">
                  {Math.round(bmr)}
                </h2>

                <p className="mt-1 text-sm md:text-base text-slate-600">
                  Calories/day
                </p>
              </div>

              {/* TABLE */}
              <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
                <div className="bg-slate-100 px-4 py-3 text-sm md:text-lg font-bold text-slate-900">
                  Daily Calorie Needs
                </div>

                <div className="divide-y divide-slate-200">
                  {activityLevels.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-4 py-3 text-sm"
                    >
                      <span className="font-medium text-slate-700">
                        {item.label}
                      </span>

                      <span className="font-bold text-slate-900">
                        {Math.round(
                          bmr * item.value
                        )}{" "}
                        cal
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* WHAT IS BMR */}
        <section className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 md:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            What is BMR?
          </h2>

          <p className="mt-3 text-sm md:text-lg leading-7 text-slate-600">
            BMR (Basal Metabolic Rate) estimates the
            calories your body burns while resting.
            It helps calculate calorie requirements
            for weight maintenance, fat loss, and
            muscle gain.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 md:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            BMR Calculator FAQs
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
              href="/calculators/bmi"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
            >
              <h3 className="font-bold text-sm md:text-base text-slate-900">
                BMI Calculator
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Calculate BMI instantly.
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