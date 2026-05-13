"use client";
      1.2 * bmi + 0.23 * a - 10.8 - 5.4;

    setResult(`${bodyFat.toFixed(2)}% Body Fat`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Weight (kg)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Enter weight"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Enter height"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Age
          </label>

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Enter age"
          />
        </div>

        <button
          onClick={calculateBodyFat}
          className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
        >
          Calculate
        </button>

        {result && (
          <div className="rounded-xl bg-slate-100 p-4 text-lg font-semibold">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}