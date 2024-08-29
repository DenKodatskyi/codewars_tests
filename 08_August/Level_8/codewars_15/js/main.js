/*
8 kyu
Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/
/* ==================================================================================================================== */

// #1
const arrayPlusArray = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((prev, curr) => prev + curr)
};

// #2
// const arrayPlusArray = (arr1, arr2) => {
//   let sumArr  = arr1.concat(arr2);
//   return sumArr.reduce((prev, curr) => prev + curr)
// };

// #3
// const arrayPlusArray = (arr1, arr2) => {
//   let sum1 = arr1.reduce((prev, curr) => prev + curr)
//   let sum2 = arr2.reduce((prev, curr) => prev + curr)
//   return sum1 + sum2;
// };

// #4
// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);





