import { CalculatorData } from "@/types/calculator";

export const bmrData: CalculatorData = {
  slug: "bmr-calculator",

  title: "BMR Calculator",

  description:
    "Calculate your Basal Metabolic Rate instantly.",

  category: "Health Calculator",

  inputs: [],

  formula: {
    title: "BMR Formula",

    formula:
      "BMR = 10W + 6.25H − 5A + 5",

    explanation:
      "BMR estimates calories burned while resting.",
  },

  faqs: [
    {
      question: "What is BMR?",
      answer:
        "BMR is the calories your body burns at rest.",
    },
  ],

  relatedCalculators: [
    {
      title: "BMI Calculator",
      href: "/health/bmi-calculator",
    },
  ],
};