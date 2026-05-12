/**
 * Adult BMI (WHO-style screening) — metric core with imperial conversions.
 * Category cutoffs are for adults approx. age 18+; younger ages need BMI-for-age percentiles.
 */

export type BmiCategory =
  | "Underweight"
  | "Normal"
  | "Overweight"
  | "Obese";

export type Gender = "female" | "male" | "prefer_not_say";

export type HeightUnit = "cm" | "ft";
export type WeightUnit = "kg" | "lb";

export const METRIC_HEIGHT_CM = {
  MIN: 50,
  MAX: 272,
} as const;

export const METRIC_WEIGHT_KG = {
  MIN: 2,
  MAX: 544,
} as const;

export const AGE_ADULT_CATEGORY_MIN = 18;
export const AGE_HARD_MIN = 2;
export const AGE_HARD_MAX = 110;

export const CM_PER_IN = 2.54;

/** lb → kg conversion factor */
export const KG_PER_LB = 0.45359237;

/** Adult WHO “normal” BMI band endpoints for ideal-weight estimates. */
export const BMI_HEALTHY_LOW = 18.5;
export const BMI_HEALTHY_HIGH = 24.99;

export const BMI_GAUGE = { min: 15, max: 40 } as const;

export type BmiFormErrors = Partial<
  Record<"height" | "weight" | "age" | "_form", string>
>;

export interface ParsedBmiMeasurements {
  heightCm: number;
  weightKg: number;
  ageYears: number;
  gender: Gender;
}

export function categorizeBmi(bmi: number): BmiCategory {
  if (!(bmi > 0 && Number.isFinite(bmi))) {
    throw new Error("BMI must be a finite positive number to categorize.");
  }
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export function computeBmiFromMetric(heightCm: number, weightKg: number): number {
  const m = heightCm / 100;
  if (!(m > 0) || !(weightKg > 0)) return NaN;
  return weightKg / (m * m);
}

export function adultCategoryApplicable(ageYears: number): boolean {
  return ageYears >= AGE_ADULT_CATEGORY_MIN;
}

export function formatBmiDisplay(value: number): string {
  if (!Number.isFinite(value)) return "";
  return (Math.round(value * 100) / 100).toFixed(2);
}

export function idealMassRangeKg(heightCm: number): { minKg: number; maxKg: number } {
  const m = heightCm / 100;
  const m2 = m * m;
  return { minKg: BMI_HEALTHY_LOW * m2, maxKg: BMI_HEALTHY_HIGH * m2 };
}

export function bmiGaugePercent(bmi: number): number {
  const { min, max } = BMI_GAUGE;
  return Math.min(
    100,
    Math.max(0, ((bmi - min) / (max - min)) * 100),
  );
}

/** Zone bounds on BMI axis → flex % width inside chart */
export function bmiGaugeZoneFlexPercents(): readonly {
  key: string;
  flex: number;
  label: string;
  tone: string;
}[] {
  const span = BMI_GAUGE.max - BMI_GAUGE.min;
  const seg = (a: number, b: number) =>
    Math.max(0, ((Math.min(BMI_GAUGE.max, b) - Math.max(BMI_GAUGE.min, a)) / span) * 100);

  return [
    {
      key: "uw",
      flex: seg(BMI_GAUGE.min, 18.5),
      label: "Under",
      tone: "bg-sky-500/95",
    },
    {
      key: "nw",
      flex: seg(18.5, 25),
      label: "Healthy",
      tone: "bg-emerald-500/95",
    },
    {
      key: "ow",
      flex: seg(25, 30),
      label: "Over",
      tone: "bg-amber-500/95",
    },
    {
      key: "ob",
      flex: seg(30, BMI_GAUGE.max),
      label: "Obese",
      tone: "bg-rose-500/95",
    },
  ];
}

export function lbsToKg(lb: number): number {
  return lb * KG_PER_LB;
}

export function kgToLb(kg: number): number {
  return kg / KG_PER_LB;
}

export function normalizeFeetInches(
  feet: number,
  inches: number,
): { feet: number; inches: number } {
  let f = feet;
  let inch = inches;
  if (!Number.isFinite(f) || !Number.isFinite(inch))
    return { feet: NaN, inches: NaN };
  while (inch >= 12) {
    f += 1;
    inch -= 12;
  }
  while (inch < 0 && f > 0) {
    f -= 1;
    inch += 12;
  }
  return { feet: f, inches: inch };
}

export function feetAndInchesToCm(feet: number, inches: number): number {
  const n = normalizeFeetInches(Math.trunc(feet), inches);
  if (!Number.isFinite(n.feet) || !Number.isFinite(n.inches)) return NaN;
  return (n.feet * 12 + n.inches) * CM_PER_IN;
}

export function heightCmToFeetAndInches(heightCm: number): {
  feet: number;
  inches: number;
} {
  const totalIn = heightCm / CM_PER_IN;
  const ft = Math.floor(totalIn / 12);
  const inch = Number((totalIn - ft * 12).toFixed(2));
  return normalizeFeetInches(ft, inch);
}

function normalizeDecimalInput(raw: string): string {
  return raw.trim().replace(/\s/g, "").replace(/,/g, ".");
}

function parsePositiveDecimal(raw: string): number | null {
  const s = normalizeDecimalInput(raw);
  if (s === "") return null;
  const n = Number(s);
  if (!Number.isFinite(n)) return null;
  return n;
}

function parseWholeAge(raw: string): number | null {
  const s = normalizeDecimalInput(raw);
  if (s === "") return null;
  if (!/^\d+$/.test(s)) return null;
  return Number(s);
}

function parseNonNegativeIntString(raw: string): number | null {
  const s = normalizeDecimalInput(raw);
  if (!/^\d+$/.test(s)) return null;
  return Number(s);
}

export interface HeightWeightFields {
  heightUnit: HeightUnit;
  weightUnit: WeightUnit;
  heightCmText: string;
  heightFtText: string;
  heightInText: string;
  weightText: string;
}

export interface AgeGenderFields {
  ageYearsText: string;
  gender: Gender;
}

export function validateMetricBmiMeasurements(
  hw: HeightWeightFields,
  ag: AgeGenderFields,
):
  | { ok: true; value: ParsedBmiMeasurements }
  | { ok: false; errors: BmiFormErrors } {
  const errors: BmiFormErrors = {};
  let heightCm = NaN;

  if (hw.heightUnit === "cm") {
    const hc = parsePositiveDecimal(hw.heightCmText);
    if (hc === null) errors.height = "Enter your height (cm).";
    else if (!(hc > 0)) errors.height = "Height must be greater than zero.";
    else if (hc < METRIC_HEIGHT_CM.MIN || hc > METRIC_HEIGHT_CM.MAX)
      errors.height = `Height must be ${METRIC_HEIGHT_CM.MIN}–${METRIC_HEIGHT_CM.MAX} cm.`;
    else heightCm = hc;
  } else {
    const fts = hw.heightFtText.trim();
    const ins = hw.heightInText.trim();
    if (fts === "" || ins === "")
      errors.height = "Enter both feet (whole number) and inches.";
    else {
      const ft = parseNonNegativeIntString(fts);
      const inchDec = parsePositiveDecimal(ins);
      if (ft === null || inchDec === null)
        errors.height = "Use a whole number of feet and valid inches.";
      else if (inchDec < 0 || inchDec >= 12)
        errors.height =
          "Keep inches from 0 up to (but not including) 12, or carry into feet.";
      else {
        heightCm = feetAndInchesToCm(ft, inchDec);
        if (
          !Number.isFinite(heightCm) ||
          heightCm < METRIC_HEIGHT_CM.MIN ||
          heightCm > METRIC_HEIGHT_CM.MAX
        )
          errors.height = `That height maps outside ${METRIC_HEIGHT_CM.MIN}–${METRIC_HEIGHT_CM.MAX} cm.`;
      }
    }
  }

  let weightKg = NaN;
  const wRaw = parsePositiveDecimal(hw.weightText);
  if (wRaw === null) errors.weight = "Enter your weight.";
  else if (!(wRaw > 0)) errors.weight = "Weight must be greater than zero.";
  else {
    weightKg = hw.weightUnit === "kg" ? wRaw : lbsToKg(wRaw);
    if (
      weightKg < METRIC_WEIGHT_KG.MIN ||
      weightKg > METRIC_WEIGHT_KG.MAX
    ) {
      errors.weight =
        hw.weightUnit === "kg"
          ? `Weight must be ${METRIC_WEIGHT_KG.MIN}–${METRIC_WEIGHT_KG.MAX} kg.`
          : `Weight must map to ${METRIC_WEIGHT_KG.MIN}–${METRIC_WEIGHT_KG.MAX} kg (about ${Math.ceil(kgToLb(METRIC_WEIGHT_KG.MIN))}–${Math.floor(kgToLb(METRIC_WEIGHT_KG.MAX))} lb).`;
    }
  }

  const age = parseWholeAge(ag.ageYearsText);
  if (age === null) errors.age = "Enter your age as a whole number.";
  else if (age < AGE_HARD_MIN || age > AGE_HARD_MAX)
    errors.age = `Age should be ${AGE_HARD_MIN}–${AGE_HARD_MAX}.`;

  if (errors.height || errors.weight || errors.age)
    return { ok: false, errors };

  if (
    !Number.isFinite(heightCm) ||
    !Number.isFinite(weightKg) ||
    age === null
  ) {
    errors._form = "Check your entries and try again.";
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      heightCm,
      weightKg,
      ageYears: age,
      gender: ag.gender,
    },
  };
}
