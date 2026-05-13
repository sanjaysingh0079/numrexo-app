import CalculatorEngine from "@/components/calculator/CalculatorEngine";
import BMIForm from "@/components/calculator/forms/BMIForm";
import { bmiData } from "@/data/calculators/bmi";
export default function Page() {
  return (
    <CalculatorEngine data={bmiData}>
  <BMIForm />
</CalculatorEngine>
  );
}
