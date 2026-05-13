"use client";

import { useState } from "react";
import CalculatorSection from "@/components/calculator/CalculatorSection";
// import CalculatorRelated from "@/components/calculator/CalculatorRelated";

export default function BodyFatCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hp = parseFloat(hip);

    if (!h || !n || !w) return;

    let bodyFat = 0;

    if (gender === "male") {
      bodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(w - n) +
            0.15456 * Math.log10(h)) -
        450;
    } else {
      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(w + hp - n) +
            0.221 * Math.log10(h)) -
        450;
    }

    setResult(parseFloat(bodyFat.toFixed(2)));
  };

  return (
    <div className="space-y-8">
      <CalculatorSection title="Body Fat Calculator">
        <div className="grid gap-4">
          <div>
            <label className="block mb-2 font-medium">Gender</label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Age</label>

            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter age"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Height (cm)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter height"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Weight (kg)
            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter weight"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Neck (cm)
            </label>

            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter neck size"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Waist (cm)
            </label>

            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter waist size"
            />
          </div>

          {gender === "female" && (
            <div>
              <label className="block mb-2 font-medium">
                Hip (cm)
              </label>

              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full border rounded-lg p-3"
                placeholder="Enter hip size"
              />
            </div>
          )}

          <button
            onClick={calculateBodyFat}
            className="bg-black text-white rounded-lg p-3"
          >
            Calculate Body Fat
          </button>

          {result !== null && (
            <div className="border rounded-lg p-4 text-lg font-semibold">
              Body Fat Percentage: {result}%
            </div>
          )}
        </div>
      </CalculatorSection>

      {/*
      <CalculatorSection title="Related Calculators">
        <CalculatorRelated
          calculators={bodyFatData.relatedCalculators}
        />
      </CalculatorSection>
      */}
    </div>
  );
}