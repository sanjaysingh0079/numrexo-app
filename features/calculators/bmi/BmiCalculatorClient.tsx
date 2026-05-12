"use client";

import { useMemo, useState } from "react";

export default function BmiCalculatorClient() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(7);
  const [pounds, setPounds] = useState(154);

  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");

  const bmi = useMemo(() => {
    if (unit === "metric") {
      const h = height / 100;

      if (!h || !weight) return 0;

      return Number((weight / (h * h)).toFixed(1));
    }

    const totalInches = feet * 12 + inches;

    if (!totalInches || !pounds) return 0;

    return Number(((pounds / (totalInches * totalInches)) * 703).toFixed(1));
  }, [unit, height, weight, feet, inches, pounds]);

  const category = useMemo(() => {
    if (bmi < 18.5) {
      return {
        label: "Underweight",
        color: "text-blue-600",
        bg: "bg-blue-50",
      };
    }

    if (bmi < 25) {
      return {
        label: "Normal Weight",
        color: "text-green-600",
        bg: "bg-green-50",
      };
    }

    if (bmi < 30) {
      return {
        label: "Overweight",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
      };
    }

    return {
      label: "Obese",
      color: "text-red-600",
      bg: "bg-red-50",
    };
  }, [bmi]);

  const healthyMin =
    unit === "metric"
      ? ((18.5 * (height / 100) * (height / 100))).toFixed(1)
      : null;

  const healthyMax =
    unit === "metric"
      ? ((24.9 * (height / 100) * (height / 100))).toFixed(1)
      : null;

  return (
    <section className="py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_280px] gap-5">
          {/* LEFT */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 lg:p-6 shadow-sm">
            {/* TOP */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                  BMI Calculator
                </h1>

                <p className="mt-2 text-sm lg:text-base text-slate-600">
                  Calculate your Body Mass Index instantly.
                </p>
              </div>

              <div className="inline-flex rounded-full bg-slate-100 p-1">
                <button
                  onClick={() => setUnit("metric")}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    unit === "metric"
                      ? "bg-white text-[#0FA37F] shadow"
                      : "text-slate-500"
                  }`}
                >
                  Metric (kg, cm)
                </button>

                <button
                  onClick={() => setUnit("imperial")}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    unit === "imperial"
                      ? "bg-white text-[#0FA37F] shadow"
                      : "text-slate-500"
                  }`}
                >
                  Imperial (lbs, ft)
                </button>
              </div>
            </div>

            {/* FORM */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {unit === "metric" ? (
                <>
                  {/* HEIGHT */}
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                      Height
                    </label>

                    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-[#0FA37F]">
                      <input
                        type="number"
                        value={height}
                        onChange={(e) =>
                          setHeight(Number(e.target.value))
                        }
                        className="w-full bg-transparent px-5 py-3 text-lg font-semibold outline-none"
                      />

                      <span className="pr-5 text-sm font-bold text-slate-400">
                        cm
                      </span>
                    </div>
                  </div>

                  {/* WEIGHT */}
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                      Weight
                    </label>

                    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-[#0FA37F]">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) =>
                          setWeight(Number(e.target.value))
                        }
                        className="w-full bg-transparent px-5 py-3 text-lg font-semibold outline-none"
                      />

                      <span className="pr-5 text-sm font-bold text-slate-400">
                        kg
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* FEET */}
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                      Height (ft)
                    </label>

                    <input
                      type="number"
                      value={feet}
                      onChange={(e) =>
                        setFeet(Number(e.target.value))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-lg font-semibold outline-none"
                    />
                  </div>

                  {/* INCHES */}
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                      Inches
                    </label>

                    <input
                      type="number"
                      value={inches}
                      onChange={(e) =>
                        setInches(Number(e.target.value))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-lg font-semibold outline-none"
                    />
                  </div>

                  {/* POUNDS */}
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                      Weight
                    </label>

                    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50">
                      <input
                        type="number"
                        value={pounds}
                        onChange={(e) =>
                          setPounds(Number(e.target.value))
                        }
                        className="w-full bg-transparent px-5 py-3 text-lg font-semibold outline-none"
                      />

                      <span className="pr-5 text-sm font-bold text-slate-400">
                        lbs
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* AGE */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                  Age
                </label>

                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) =>
                      setAge(Number(e.target.value))
                    }
                    className="w-full bg-transparent px-5 py-3 text-lg font-semibold outline-none"
                  />

                  <span className="pr-5 text-sm font-bold text-slate-400">
                    years
                  </span>
                </div>
              </div>

              {/* GENDER */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase text-slate-500">
                  Gender
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGender("male")}
                    className={`rounded-2xl border py-3 font-bold transition ${
                      gender === "male"
                        ? "border-[#0FA37F] bg-[#E6F7F2] text-[#0FA37F]"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                  >
                    Male
                  </button>

                  <button
                    onClick={() => setGender("female")}
                    className={`rounded-2xl border py-3 font-bold transition ${
                      gender === "female"
                        ? "border-[#0FA37F] bg-[#E6F7F2] text-[#0FA37F]"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-5 w-full rounded-2xl bg-[#0FA37F] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#0D8F70]">
              Calculate My BMI
            </button>

            {/* RESULT */}
            <div
              className={`mt-5 rounded-3xl p-5 ${category.bg}`}
            >
              <div className="grid lg:grid-cols-[150px_1fr] gap-5 items-center">
                {/* CIRCLE */}
                <div className="flex flex-col items-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[#10B981] bg-white">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-slate-500">
                        Your BMI
                      </p>

                      <p className="mt-1 text-4xl font-extrabold text-slate-900">
                        {bmi}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`mt-3 rounded-full bg-white px-4 py-1 text-sm font-bold ${category.color}`}
                  >
                    {category.label}
                  </span>
                </div>

                {/* CONTENT */}
                <div>
                  <h2
                    className={`text-2xl font-bold ${category.color}`}
                  >
                    {category.label}
                  </h2>

                  <p className="mt-3 text-slate-600 leading-7">
                    BMI helps estimate body weight category
                    using your height and weight. Maintain a
                    healthy lifestyle with balanced nutrition,
                    exercise, hydration, and proper sleep.
                  </p>

                  {unit === "metric" && (
                    <div className="mt-5 grid sm:grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">
                          Healthy Min
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {healthyMin} kg
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">
                          Healthy Max
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {healthyMax} kg
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">
                          BMI Prime
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {(bmi / 25).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                BMI Categories
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-blue-700">
                  <span className="font-semibold">
                    Underweight
                  </span>

                  <span>{"<"} 18.5</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 text-green-700">
                  <span className="font-semibold">
                    Normal
                  </span>

                  <span>18.5 - 24.9</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-yellow-50 px-4 py-3 text-yellow-700">
                  <span className="font-semibold">
                    Overweight
                  </span>

                  <span>25 - 29.9</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-red-50 px-4 py-3 text-red-700">
                  <span className="font-semibold">
                    Obese
                  </span>

                  <span>30+</span>
                </div>
              </div>
            </div>

            <div className="flex min-h-[320px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white text-slate-400">
              300 × 600 Ad Space
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}