import { CalculatorData } from "@/types/calculator";

export const bodyFatData: CalculatorData = {
  slug: "body-fat-calculator",

  title: "Body Fat Calculator",

  description:
    "Calculate body fat percentage using the U.S. Navy Method.",

  category: "Health Calculator",

  inputs: [
    {
      id: "age",
      label: "Age",
      type: "number",
      placeholder: "25",
    },
    {
      id: "height",
      label: "Height",
      type: "number",
      placeholder: "170",
    },
    {
      id: "weight",
      label: "Weight",
      type: "number",
      placeholder: "70",
    },
  ],

  formula: {
    title: "Body Fat Formula",

    formula:
      "Body Fat % = 1.20 × BMI + 0.23 × Age − 16.2",

    explanation:
      "This formula estimates body fat percentage using BMI and age.",
  },

  faqs: [
    {
      question: "What is body fat percentage?",
      answer:
        "Body fat percentage is the percentage of fat in your body compared to total body weight.",
    },
    {
      question: "Is body fat better than BMI?",
      answer:
        "Body fat percentage gives a more accurate fitness estimate than BMI.",
    },
  ],

  relatedCalculators: [
    {
      title: "BMI Calculator",
      href: "/health/bmi-calculator",
    },
    {
      title: "BMR Calculator",
      href: "/health/bmr-calculator",
    },
    {
      title: "Calorie Calculator",
      href: "/health/calorie-calculator",
    },
  ],
};