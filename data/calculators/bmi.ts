import { CalculatorData } from "@/types/calculator";

export const bmiData: CalculatorData = {
  slug: "bmi-calculator",

  title: "BMI Calculator",

  description:
    "Calculate your Body Mass Index instantly.",

  category: "Health Calculator",

  inputs: [],

  formula: {
    title: "BMI Formula",

    formula: "BMI = weight / height²",

    explanation:
      "BMI is calculated by dividing weight in kilograms by height in meters squared.",
  },

  faqs: [
    {
      question: "What is BMI?",
      answer:
        "BMI measures body weight relative to height.",
    },
  ],

  relatedCalculators: [
    {
      title: "BMR Calculator",
      href: "/health/bmr-calculator",
    },
  ],
};