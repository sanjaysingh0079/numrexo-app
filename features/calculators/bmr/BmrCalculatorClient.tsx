"use client";

import { useMemo, useState } from "react";

import {
  calculateHarris,
  calculateKatch,
  calculateMifflin,
} from "./bmr-logic";

export default function BmrCalculatorClient() {
  const [unit, setUnit] = useState("metric");
  const [formula, setFormula] = useState("mifflin");

  const [gender, setGender] = useState("male");

  const [age, setAge] = useState(25);

  const [height, setHeight] = useState(180);

  const [weight, setWeight] = useState(70);

  const [bodyFat, setBodyFat] = useState(20);

  const bmr = useMemo(() => {
    if (formula === "mifflin") {
      return calculateMifflin({
        gender,
        weight,
        height,
        age,
      });
    }

    if (formula === "harris") {
      return calculateHarris({
        gender,
        weight,
        height,
        age,
      });
    }

    return calculateKatch(bodyFat, weight);
  }, [formula, gender, weight, height, age, bodyFat]);

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

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 md:p-8 shadow-sm">
      {/* HEADING */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          BMR Calculator
        </h1>

        <p className="mt-3 text-slate-600">
          Calculate your Basal Metabolic Rate and daily calorie needs instantly.
        </p>
      </div>

      {/* UNIT TOGGLE */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setUnit("metric")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            unit === "metric"
              ? "bg-emerald-500 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Metric
        </button>

        <button
          onClick={() => setUnit("imperial")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            unit === "imperial"
              ? "bg-emerald-500 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Imperial
        </button>
      </div>

      {/* FORMULA */}
      <div className="grid md:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setFormula("mifflin")}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            formula === "mifflin"
              ? "border-emerald-500 bg-emerald-50 text-emerald-600"
              : "border-slate-200"
          }`}
        >
          Mifflin St Jeor
        </button>

        <button
          onClick={() => setFormula("harris")}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            formula === "harris"
              ? "border-emerald-500 bg-emerald-50 text-emerald-600"
              : "border-slate-200"
          }`}
        >
          Harris Benedict
        </button>

        <button
          onClick={() => setFormula("katch")}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            formula === "katch"
              ? "border-emerald-500 bg-emerald-50 text-emerald-600"
              : "border-slate-200"
          }`}
        >
          Katch McArdle
        </button>
      </div>

      {/* FORM */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* AGE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Age
          </label>

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Gender
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setGender("male")}
              className={`rounded-2xl py-4 font-semibold ${
                gender === "male"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100"
              }`}
            >
              Male
            </button>

            <button
              onClick={() => setGender("female")}
              className={`rounded-2xl py-4 font-semibold ${
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
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Height ({unit === "metric" ? "cm" : "in"})
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* WEIGHT */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* BODY FAT */}
        {formula === "katch" && (
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Body Fat %
            </label>

            <input
              type="number"
              value={bodyFat}
              onChange={(e) => setBodyFat(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-emerald-500"
            />
          </div>
        )}
      </div>

      {/* RESULT */}
      <div className="mt-8 rounded-3xl bg-emerald-50 p-6">
        <p className="text-sm font-semibold text-emerald-700">
          Your BMR
        </p>

        <h2 className="mt-2 text-5xl font-extrabold text-slate-900">
          {Math.round(bmr)}
        </h2>

        <p className="mt-2 text-slate-600">
          Calories/day
        </p>
      </div>

      {/* ACTIVITY TABLE */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
        <div className="bg-slate-100 px-5 py-4 font-bold text-slate-900">
          Daily Calorie Needs
        </div>

        <div className="divide-y divide-slate-200">
          {activityLevels.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-5 py-4"
            >
              <span className="font-medium text-slate-700">
                {item.label}
              </span>

              <span className="font-bold text-slate-900">
                {Math.round(bmr * item.value)} cal
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}