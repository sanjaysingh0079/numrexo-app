"use client";

import { useMemo, useState } from "react";

export default function BMIForm() {
  const [unit, setUnit] = useState("metric");
  const [gender, setGender] = useState("male");

  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(25);

  const bmi = useMemo(() => {
    if (unit === "metric") {
      return (
        weight /
        ((height / 100) * (height / 100))
      ).toFixed(1);
    }

    return (
      (weight / (height * height)) * 703
    ).toFixed(1);
  }, [height, weight, unit]);

  const category = useMemo(() => {
    const value = Number(bmi);

    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";

    return "Obese";
  }, [bmi]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* LEFT */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* UNIT */}
        <div className="flex gap-3">
          <button
            onClick={() => setUnit("metric")}
            className={`rounded-xl px-6 py-3 font-semibold transition ${
              unit === "metric"
                ? "bg-emerald-500 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Metric
          </button>

          <button
            onClick={() => setUnit("imperial")}
            className={`rounded-xl px-6 py-3 font-semibold transition ${
              unit === "imperial"
                ? "bg-emerald-500 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Imperial
          </button>
        </div>

        {/* GENDER */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setGender("male")}
            className={`rounded-xl px-6 py-3 font-semibold transition ${
              gender === "male"
                ? "bg-emerald-500 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Male
          </button>

          <button
            onClick={() => setGender("female")}
            className={`rounded-xl px-6 py-3 font-semibold transition ${
              gender === "female"
                ? "bg-emerald-500 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Female
          </button>
        </div>

        {/* FORM */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Age
            </label>

            <input
              type="number"
              value={age}
              onChange={(e) =>
                setAge(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Weight ({unit === "metric" ? "kg" : "lb"})
            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Height ({unit === "metric" ? "cm" : "in"})
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-full rounded-xl bg-emerald-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-600">
          Calculate BMI
        </button>
      </div>

      {/* RIGHT */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">
          Your Result
        </p>

        <div className="mt-5 rounded-2xl bg-emerald-50 p-6">
          <h3 className="text-6xl font-bold text-slate-900">
            {bmi}
          </h3>

          <p className="mt-3 text-lg text-slate-600">
            Body Mass Index
          </p>
        </div>

        {/* CATEGORY BAR */}
        <div className="mt-6 overflow-hidden rounded-full">
          <div className="grid grid-cols-4">
            <div className="h-4 bg-blue-500"></div>
            <div className="h-4 bg-emerald-500"></div>
            <div className="h-4 bg-yellow-400"></div>
            <div className="h-4 bg-red-500"></div>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <span>Category</span>

            <span className="font-bold">
              {category}
            </span>
          </div>

          <div className="flex items-center justify-between border-b px-5 py-4">
            <span>Healthy BMI Range</span>

            <span className="font-bold">
              18.5 - 24.9
            </span>
          </div>

          <div className="flex items-center justify-between px-5 py-4">
            <span>Age</span>

            <span className="font-bold">
              {age}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}