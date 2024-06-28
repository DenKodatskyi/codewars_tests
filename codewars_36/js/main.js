/*
8 kyu
Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/
/* ==================================================================================================================== */

// #1
const positiveSum = (arr) => arr.reduce((cur, prev) => cur + (prev > 0 ? prev : 0), 0);

// #2
// const positiveSum = (arr) => {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       sum += arr[i]
//     }
//   }
//   return sum
// };







