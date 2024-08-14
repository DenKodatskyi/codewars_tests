/*
8 kyu
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/
/* ==================================================================================================================== */

// #1
const findAverage = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
};

// #2
// const findAverage = (array) => {
//   if(array.length === 0) {
//     return 0
//   }
//   let sum = 0
//   for(let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//   return sum / array.length
// };





