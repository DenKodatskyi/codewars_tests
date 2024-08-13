/*
8 kyu
Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/
/* ==================================================================================================================== */

// #1
const bmi = (weight, height, res = weight / height / height) => {
  return res <= 18.5 ? 'Underweight' :
    res <= 25 ? 'Normal' :
      res <= 30 ? 'Overweight' : 'Obese'
}

// #2
// const bmi = (weight, height) => {
//   let result = weight / (height * height);
//   if(result <= 18.5) {
//     return 'Underweight'
//   } else if (result <= 25) {
//     return 'Normal'
//   } else if (result <= 30) {
//     return 'Overweight'
//   } else if (result > 30) {
//     return 'Obese'
//   }
// };





