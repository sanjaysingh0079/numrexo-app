"use client";

import { useState } from "react";

export default function CalorieCalculatorPage() {
  const [gender, setGender] = useState("male");
  const [unit, setUnit] = useState("metric");

  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const [activity, setActivity] = useState(1.55);

  const calculateCalories = () => {
    let bmr = 0;

    if (gender === "male") {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;
    } else {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    return Math.round(bmr * activity);
  };

  const calories = calculateCalories();

  return (
    <main className="bg-[#f5f7f9] min-h-screen py-4 md:py-10 px-3">
      <div className="max-w-6xl mx-auto">

        {/* Calculator Card */}
        <div className="bg-white border border-gray-200 rounded-[26px] p-4 md:p-8 shadow-sm">

          <h1 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Calorie Calculator
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Calculate your daily calorie needs instantly.
          </p>

          {/* Unit Switch */}
          <div className="flex gap-2 mt-5">
            <button
              onClick={() => setUnit("metric")}
              className={`px-5 py-3 rounded-xl font-semibold text-sm transition ${
                unit === "metric"
                  ? "bg-[#10b981] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Metric
            </button>

            <button
              onClick={() => setUnit("imperial")}
              className={`px-5 py-3 rounded-xl font-semibold text-sm transition ${
                unit === "imperial"
                  ? "bg-[#10b981] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Imperial
            </button>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Age
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) =>
                  setAge(Number(e.target.value))
                }
                className="w-full mt-2 h-12 rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-lg font-semibold outline-none focus:border-[#10b981]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => setGender("male")}
                  className={`h-12 rounded-xl font-semibold ${
                    gender === "male"
                      ? "bg-[#10b981] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  Male
                </button>

                <button
                  onClick={() => setGender("female")}
                  className={`h-12 rounded-xl font-semibold ${
                    gender === "female"
                      ? "bg-[#10b981] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Height ({unit === "metric" ? "cm" : "in"})
              </label>

              <input
                type="number"
                value={height}
                onChange={(e) =>
                  setHeight(Number(e.target.value))
                }
                className="w-full mt-2 h-12 rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-lg font-semibold outline-none focus:border-[#10b981]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Weight ({unit === "metric" ? "kg" : "lbs"})
              </label>

              <input
                type="number"
                value={weight}
                onChange={(e) =>
                  setWeight(Number(e.target.value))
                }
                className="w-full mt-2 h-12 rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-lg font-semibold outline-none focus:border-[#10b981]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Activity Level
              </label>

              <select
                value={activity}
                onChange={(e) =>
                  setActivity(Number(e.target.value))
                }
                className="w-full mt-2 h-12 rounded-xl border border-gray-200 bg-[#f8fafc] px-4 text-base font-medium outline-none focus:border-[#10b981]"
              >
                <option value={1.2}>
                  Sedentary
                </option>

                <option value={1.375}>
                  Light Exercise
                </option>

                <option value={1.55}>
                  Moderate Exercise
                </option>

                <option value={1.725}>
                  Heavy Exercise
                </option>

                <option value={1.9}>
                  Athlete
                </option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button className="w-full h-12 rounded-xl bg-[#10b981] text-white font-bold text-base mt-6 hover:bg-[#059669] transition">
            Calculate Calories
          </button>

          {/* Result */}
          <div className="mt-6 bg-[#ecfdf5] rounded-2xl p-5">

            <p className="text-[#059669] font-semibold text-sm">
              Daily Calories
            </p>

            <h2 className="text-5xl font-bold text-[#0f172a] mt-2">
              {calories}
            </h2>

            <p className="text-gray-600 mt-1">
              calories/day
            </p>
          </div>

          {/* Activity Table */}
          <div className="mt-6 rounded-2xl border border-gray-200 overflow-hidden">

            <div className="bg-[#f1f5f9] px-5 py-4 font-bold text-lg">
              Daily Calorie Needs
            </div>

            <div className="divide-y">

              <div className="flex justify-between px-5 py-4">
                <span>Sedentary</span>
                <span className="font-semibold">
                  {Math.round(calories * 0.9)}
                </span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span>Light Exercise</span>
                <span className="font-semibold">
                  {Math.round(calories)}
                </span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span>Moderate Exercise</span>
                <span className="font-semibold">
                  {Math.round(calories * 1.1)}
                </span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span>Heavy Exercise</span>
                <span className="font-semibold">
                  {Math.round(calories * 1.2)}
                </span>
              </div>

              <div className="flex justify-between px-5 py-4">
                <span>Athlete</span>
                <span className="font-semibold">
                  {Math.round(calories * 1.3)}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="bg-white border border-gray-200 rounded-[26px] p-5 md:p-8 mt-6">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            Calorie Calculator FAQ
          </h2>

          <div className="space-y-5 mt-6">

            <div>
              <h3 className="font-bold text-lg">
                What is a calorie calculator?
              </h3>

              <p className="text-gray-600 mt-2">
                A calorie calculator estimates how many calories your body needs daily based on age, gender, weight, height, and activity level.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                How many calories should I eat daily?
              </h3>

              <p className="text-gray-600 mt-2">
                Daily calorie needs vary depending on your body and activity level. Most adults need between 1800–3000 calories daily.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Is this calculator accurate?
              </h3>

              <p className="text-gray-600 mt-2">
                This calculator provides a good estimate using standard BMR and activity formulas.
              </p>
            </div>

          </div>
        </section>

        {/* Related Calculators */}
        <section className="mt-6">

          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
            Related Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <a
              href="/calculators/bmi"
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#10b981] transition"
            >
              <h3 className="font-bold">
                BMI Calculator
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Body mass index tool
              </p>
            </a>

            <a
              href="/calculators/bmr"
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#10b981] transition"
            >
              <h3 className="font-bold">
                BMR Calculator
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Basal metabolic rate
              </p>
            </a>

            <a
              href="/calculators/body-fat"
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#10b981] transition"
            >
              <h3 className="font-bold">
                Body Fat Calculator
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Estimate body fat %
              </p>
            </a>

            <a
              href="/calculators/water-intake"
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#10b981] transition"
            >
              <h3 className="font-bold">
                Water Intake
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Daily water needs
              </p>
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}