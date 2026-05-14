"use client";

import { useState } from "react";

export default function BodyFatCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState("");

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hp = parseFloat(hip);

    if (!h || !n || !w) {
      setResult("Please fill all required fields");
      return;
    }

    let bodyFat = 0;

    if (gender === "male") {
      bodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(w - n) +
            0.15456 * Math.log10(h)) -
        450;
    } else {
      if (!hp) {
        setResult("Please enter hip measurement");
        return;
      }

      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(w + hp - n) +
            0.221 * Math.log10(h)) -
        450;
    }

    setResult(`${bodyFat.toFixed(2)}% Body Fat`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
            placeholder="Enter height"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Neck (cm)
          </label>

          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
            placeholder="Enter neck size"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Waist (cm)
          </label>

          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
            placeholder="Enter waist size"
          />
        </div>

        {gender === "female" && (
          <div>
            <label className="mb-2 block font-medium">
              Hip (cm)
            </label>

            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
              placeholder="Enter hip size"
            />
          </div>
        )}

        <button
          onClick={calculateBodyFat}
          className="w-full rounded-xl bg-black px-5 py-3 text-white"
        >
          Calculate Body Fat
        </button>

        {result && (
          <div className="rounded-xl bg-slate-100 p-4 text-center text-lg font-semibold">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}