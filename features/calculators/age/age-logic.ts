export interface CalendarParts {
  year: number;
  month: number;
  /** 1–31 */
  day: number;
}

/** Local calendar ISO date fragment YYYY-MM-DD */
const ISO_LOCAL_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function parseLocalISODate(
  iso: string,
): { ok: true; parts: CalendarParts } | { ok: false } {
  const trimmed = iso.trim();
  const m = ISO_LOCAL_RE.exec(trimmed);
  if (!m) return { ok: false };
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return { ok: false };
  const check = new Date(year, month - 1, day);
  if (
    check.getFullYear() !== year ||
    check.getMonth() !== month - 1 ||
    check.getDate() !== day
  ) {
    return { ok: false };
  }
  return { ok: true, parts: { year, month, day } };
}

export function todayLocalParts(reference: Date = new Date()): CalendarParts {
  return {
    year: reference.getFullYear(),
    month: reference.getMonth() + 1,
    day: reference.getDate(),
  };
}

export function formatLocalISO(parts: CalendarParts): string {
  const y = String(parts.year).padStart(4, "0");
  const m = String(parts.month).padStart(2, "0");
  const d = String(parts.day).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function compareParts(a: CalendarParts, b: CalendarParts): number {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Difference from `birth` → `asOf` in whole calendar units (borrow days from prior month lengths).
 */
export function calendarAgeParts(
  birth: CalendarParts,
  asOf: CalendarParts,
): { years: number; months: number; days: number } {
  let years = asOf.year - birth.year;
  let months = asOf.month - birth.month;
  let days = asOf.day - birth.day;

  if (days < 0) {
    months -= 1;
    const prevMonth = asOf.month === 1 ? 12 : asOf.month - 1;
    const prevMonthYear = asOf.month === 1 ? asOf.year - 1 : asOf.year;
    days += daysInMonth(prevMonthYear, prevMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

/** Whole calendar days from birth (inclusive midnight) through as‑of midnight (exclusive of extra partial day — standard elapsed whole days between dates). */
export function totalWholeDaysBetween(
  birth: CalendarParts,
  asOf: CalendarParts,
): number {
  const utc0 = Date.UTC(birth.year, birth.month - 1, birth.day);
  const utc1 = Date.UTC(asOf.year, asOf.month - 1, asOf.day);
  return Math.round((utc1 - utc0) / 86400000);
}

export interface AgeComputation {
  breakdown: {
    years: number;
    months: number;
    days: number;
  };
  totalMonthsFromBreakdown: number;
  totalWeeksFloored: number;
  totalDays: number;
}

export function computeAge(
  birth: CalendarParts,
  asOf: CalendarParts,
): AgeComputation | null {
  if (compareParts(birth, asOf) > 0) return null;

  const breakdown = calendarAgeParts(birth, asOf);
  const totalMonthsFromBreakdown = breakdown.years * 12 + breakdown.months;
  const totalDays = totalWholeDaysBetween(birth, asOf);
  const totalWeeksFloored = Math.floor(totalDays / 7);

  return {
    breakdown,
    totalMonthsFromBreakdown,
    totalWeeksFloored,
    totalDays,
  };
}

export function validateDobInput(
  iso: string,
  asOf: CalendarParts,
):
  | { ok: true; birth: CalendarParts }
  | { ok: false; message: string } {
  const t = iso.trim();
  if (t === "") {
    return { ok: false, message: "Choose your date of birth." };
  }

  const parsed = parseLocalISODate(iso);
  if (!parsed.ok) {
    return { ok: false, message: "Enter a valid calendar date." };
  }

  if (compareParts(parsed.parts, asOf) > 0) {
    return { ok: false, message: "Date of birth cannot be in the future." };
  }

  const earliest: CalendarParts = { year: 1900, month: 1, day: 1 };
  if (compareParts(parsed.parts, earliest) < 0) {
    return {
      ok: false,
      message: "Pick a birth date from 1900 onward.",
    };
  }

  return { ok: true, birth: parsed.parts };
}
