"use client";

import {
  BMI_GAUGE,
  bmiGaugePercent,
  bmiGaugeZoneFlexPercents,
  formatBmiDisplay,
} from "@/features/calculators/bmi/bmi-logic";

interface BmiSpectrumBarProps {
  bmi: number;
}

/** Horizontal categorical band visualization for BMI on a bounded adult screening axis. */
export function BmiSpectrumBar({ bmi }: BmiSpectrumBarProps) {
  const pct = Number.isFinite(bmi) ? bmiGaugePercent(bmi) : 0;
  const zones = bmiGaugeZoneFlexPercents();

  return (
    <div
      role="img"
      aria-label={`BMI ${formatBmiDisplay(bmi)} on shaded adult WHO-style categories from BMI ${BMI_GAUGE.min} to ${BMI_GAUGE.max}.`}
      className="w-full select-none"
    >
      <div className="flex h-3.5 w-full overflow-hidden rounded-full ring-1 ring-black/10 shadow-inner">
        {zones.map((z) => (
          <div
            key={z.key}
            style={{ flex: `${z.flex} 1 0` }}
            className={`${z.tone} min-w-0 first:rounded-l-full last:rounded-r-full`}
            title={z.label}
          />
        ))}
      </div>

      <div className="relative mt-2 h-7">
        <div
          className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${pct}%` }}
        >
          <div className="h-0 w-0 border-x-[6px] border-x-transparent border-b-[7px] border-b-gray-900" />
          <span className="mt-0.5 rounded-md bg-gray-900 px-2 py-0.5 text-[11px] font-bold tabular-nums text-white shadow">
            {Number.isFinite(bmi) ? formatBmiDisplay(bmi) : "—"}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-between gap-2 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
        <span>{BMI_GAUGE.min}</span>
        <span className="text-sky-700">&lt;18.5</span>
        <span className="text-emerald-800">18.5–24.9</span>
        <span className="text-amber-800">25–29.9</span>
        <span className="text-rose-800">30+</span>
        <span>{BMI_GAUGE.max}</span>
      </div>
    </div>
  );
}
