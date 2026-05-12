export function calculateMifflin({
    gender,
    weight,
    height,
    age,
  }: {
    gender: string;
    weight: number;
    height: number;
    age: number;
  }) {
    if (gender === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    }
  
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
  
  export function calculateHarris({
    gender,
    weight,
    height,
    age,
  }: {
    gender: string;
    weight: number;
    height: number;
    age: number;
  }) {
    if (gender === "male") {
      return (
        88.362 +
        13.397 * weight +
        4.799 * height -
        5.677 * age
      );
    }
  
    return (
      447.593 +
      9.247 * weight +
      3.098 * height -
      4.33 * age
    );
  }
  
  export function calculateKatch(bodyFat: number, weight: number) {
    const leanMass = weight * (1 - bodyFat / 100);
  
    return 370 + 21.6 * leanMass;
  }