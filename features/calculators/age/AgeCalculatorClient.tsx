"use client";

import { useCallback, useId, useState } from "react";
import type { AgeComputation } from "@/features/calculators/age/age-logic";
import {
  computeAge,
  formatLocalISO,
  todayLocalParts,
  validateDobInput,
} from "@/features/calculators/age/age-logic";

export function AgeCalculatorClient() {
  const baseId = useId();
  const dobInputId = `${baseId}-dob`;
  const errorId = `${baseId}-dob-error`;
  const statsId = `${baseId}-stats`;

  const [dobISO, setDobISO] = useState("");
  const [attemptedCalc, setAttemptedCalc] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AgeComputation | null>(null);

  const maxISO = formatLocalISO(todayLocalParts());

  const compute = useCallback(() => {
    setAttemptedCalc(true);
    const valid = validateDobInput(dobISO, todayLocalParts());
    if (!valid.ok) {
      setError(valid.message);
      setResult(null);
      return;
    }
    const age = computeAge(valid.birth, todayLocalParts());
    if (!age) {
      setError("Date of birth cannot be in the future.");
      setResult(null);
      return;
    }
    setError(null);
    setResult(age);
  }, [dobISO]);

  const handleReset = () => {
    setDobISO("");
    setError(null);
    setResult(null);
    setAttemptedCalc(false);
  };

  const showError = !!(attemptedCalc && error);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8">
      <section
        className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-sm xl:col-span-5"
        aria-labelledby={`${baseId}-input-heading`}
      >
        <div className="border-b border-gray-100 pb-6 mb-6">
          <h2
            id={`${baseId}-input-heading`}
            className="text-lg font-semibold tracking-tight text-gray-950"
          >
            Date of birth
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Ages are computed to today&apos;s calendar date on your device. Future dates
            are blocked automatically.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            compute();
          }}
          noValidate
        >
          <div>
            <label
              htmlFor={dobInputId}
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Date<span className="text-rose-600"> *</span>
            </label>
            <div
              className={`rounded-xl border bg-gray-50/40 overflow-hidden transition ring-2 ring-transparent ${
                showError
                  ? "border-rose-300 ring-rose-300/55"
                  : "border-gray-200 focus-within:border-gray-900/30 focus-within:ring-black/10"
              }`}
            >
              <input
                id={dobInputId}
                type="date"
                required
                max={maxISO}
                value={dobISO}
                onChange={(e) => {
                  setDobISO(e.target.value);
                  setError(null);
                }}
                aria-invalid={showError || undefined}
                aria-describedby={`${baseId}-dob-desc ${showError ? errorId : ""}`.trim()}
                className="w-full min-h-[52px] bg-transparent px-4 py-3 text-base font-medium tracking-tight text-gray-950 outline-none [color-scheme:light]"
              />
            </div>
            <p
              id={`${baseId}-dob-desc`}
              className="mt-2 text-xs text-gray-500 leading-snug max-w-xl"
            >
              Select your birth date. Today is capped as the upper bound.
            </p>
            {showError ? (
              <p id={errorId} className="mt-2 text-sm text-rose-600" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:flex-wrap gap-3 pt-1">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-black px-8 py-3.5 text-sm font-semibold text-white shadow hover:bg-gray-900 active:translate-y-[0.5px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:min-w-[11rem]"
            >
              Calculate Age
            </button>
          </div>
        </form>
      </section>

      <aside
        className="rounded-3xl border border-gray-200/90 bg-linear-to-br from-gray-50/90 via-white to-white p-6 sm:p-8 shadow-sm xl:col-span-7 flex flex-col min-h-[20rem]"
        aria-labelledby={`${baseId}-out-heading`}
      >
        <div className="border-b border-gray-100 pb-6 mb-6">
          <h2
            id={`${baseId}-out-heading`}
            className="text-lg font-semibold tracking-tight text-gray-950"
          >
            Breakdown & totals
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Readable age plus elapsed time in common units — all anchored to midnight-to-midnight dates.
          </p>
        </div>

        {!result ? (
          <div className="flex flex-1 flex-col justify-center rounded-2xl border border-dashed border-gray-300/90 bg-white/60 px-6 py-14 text-gray-500">
            <p className="text-sm leading-relaxed max-w-md">
              Choose your date of birth, then tap <span className="font-semibold text-gray-700">Calculate Age</span>{" "}
              to populate years through total days here.
            </p>
          </div>
        ) : (
          <div
            id={statsId}
            className="flex flex-col gap-6"
            aria-live="polite"
            aria-atomic
          >
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
              {([
                ["Years", String(result.breakdown.years)],
                ["Months", String(result.breakdown.months)],
                ["Days", String(result.breakdown.days)],
              ] satisfies [string, string][]).map(([label, value]) => (
                <div key={label} className="bg-white px-5 py-6 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {label}
                  </p>
                  <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-gray-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white divide-y divide-gray-100 shadow-sm overflow-hidden">
              {(
                [
                  ["Total months", String(result.totalMonthsFromBreakdown)],
                  ["Total weeks", String(result.totalWeeksFloored)],
                  ["Total days", String(result.totalDays)],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-8 px-5 py-4 sm:py-5"
                >
                  <span className="text-sm font-medium text-gray-600">{label}</span>
                  <span className="text-lg sm:text-xl font-semibold tabular-nums tracking-tight text-gray-950">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] leading-relaxed text-gray-400 border-t border-dashed border-gray-200 pt-5">
              <span className="font-medium text-gray-500">Note:</span> &ldquo;Total months&rdquo; is{" "}
              <span className="font-semibold text-gray-600 font-mono">{result.breakdown.years}×12+{result.breakdown.months}</span>{" "}
              based on calendar years/months elapsed (the day remainder stays in the trio above). Weeks are whole blocks of seven elapsed days starting from the birth date.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
