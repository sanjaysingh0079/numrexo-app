import { CalculatorData } from "@/types/calculator";

export const calorieData: CalculatorData = {
  slug: "calorie-calculator",

  title: "Calorie Calculator",

  description:
    "Estimate your daily calorie requirements.",

  category: "Health Calculator",

  inputs: [],

  formula: {
    title: "Calorie Formula",

    formula:
      "Calories = BMR × Activity Level",

    explanation:
      "Daily calories depend on metabolism and activity.",
  },

  faqs: [
    {
      question: "Why count calories?",
      answer:
        "Calorie tracking helps manage weight and nutrition.",
    },
  ],

  relatedCalculators: [
    {
      title: "BMI Calculator",
      href: "/health/bmi-calculator",
    },
  ],
};