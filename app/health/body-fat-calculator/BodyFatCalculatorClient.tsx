"use client";

import { useState } from "react";

export default function BodyFatCalculatorClient() {
  const [result, setResult] = useState("");

  const calculateBodyFat = () => {
    const bodyFat = 20;

    setResult(`${bodyFat.toFixed(2)}% Body Fat`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <button
        onClick={calculateBodyFat}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Calculate Body Fat
      </button>

      <p className="mt-4">{result}</p>
    </div>
  );
}