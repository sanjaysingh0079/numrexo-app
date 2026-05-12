import type { ReactNode } from "react";
import type { DynamicCalculatorSlug } from "@/types/calculator";

function CalculatorCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="space-y-6">{children}</div>
      <p className="mt-8 text-xs sm:text-sm text-gray-500 border-t border-gray-100 pt-6">
        This is placeholder UI — full calculation logic will connect here later.
      </p>
    </div>
  );
}

function StubField({
  label,
  suffix,
}: {
  label: string;
  suffix?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <div className="flex rounded-xl border border-gray-200 bg-gray-50/80 overflow-hidden focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
        <input
          type="text"
          readOnly
          placeholder="—"
          aria-readonly="true"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-gray-900 outline-none"
        />
        {suffix ? (
          <span className="flex items-center shrink-0 border-l border-gray-200 px-4 text-sm text-gray-600 bg-white">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

function PrimaryButtonPlaceholder({ label }: { label: string }) {
  return (
    <button
      type="button"
      disabled
      className="w-full sm:w-auto sm:min-w-[12rem] rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
    >
      {label}
    </button>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-lg font-semibold text-black border-b border-gray-100 pb-3">
      {title}
    </h2>
  );
}

export function CalculatorContent({ slug }: { slug: DynamicCalculatorSlug }) {
  switch (slug) {
    case "emi":
      return (
        <CalculatorCard>
          <SectionTitle title="Loan details" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StubField label="Principal amount" suffix="₹" />
            <StubField label="Annual interest rate" suffix="%" />
            <StubField label="Tenure" suffix="mo" />
          </div>
          <PrimaryButtonPlaceholder label="Show EMI breakdown" />
        </CalculatorCard>
      );
    case "percentage":
      return (
        <CalculatorCard>
          <SectionTitle title="Percentage" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StubField label="What is ___% of ___?" />
            <StubField label="Or: value vs total" />
          </div>
          <PrimaryButtonPlaceholder label="Calculate" />
        </CalculatorCard>
      );
    case "gst":
      return (
        <CalculatorCard>
          <SectionTitle title="GST" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StubField label="Amount" suffix="₹" />
            <StubField label="GST rate" suffix="%" />
          </div>
          <fieldset className="flex flex-wrap gap-4 pt-1">
            <legend className="sr-only">Inclusive or exclusive GST</legend>
            <button
              type="button"
              disabled
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm opacity-70 cursor-not-allowed"
            >
              Add GST
            </button>
            <button
              type="button"
              disabled
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm opacity-70 cursor-not-allowed"
            >
              Remove GST
            </button>
          </fieldset>
          <PrimaryButtonPlaceholder label="Run GST breakdown" />
        </CalculatorCard>
      );
    case "sip":
      return (
        <CalculatorCard>
          <SectionTitle title="Investment" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StubField label="Monthly SIP" suffix="₹" />
            <StubField label="Expected annual return" suffix="%" />
            <StubField label="Duration" suffix="yr" />
          </div>
          <PrimaryButtonPlaceholder label="Project maturity value" />
        </CalculatorCard>
      );
    default: {
      const _exhaust: never = slug;
      void _exhaust;
      return null;
    }
  }
}
