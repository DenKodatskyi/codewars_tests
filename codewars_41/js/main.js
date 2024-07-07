/*
8 kyu
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

Например, для [1, 2, 2] должно возвращаться 9, потому что 1 2 + 2 2 + 2 2 "=" 9 1 2 +2 2 +2 2 =9.

*/
/* ==================================================================================================================== */
// #1
const squareSum = (numbers) => {
  return numbers.reduce((sum, num) => sum + (num * num), 0)
};

// #2
// const squareSum = (numbers) => {
//   let result = 0
//   for(let i = 0; i < numbers.length; i++) {
//     result += numbers[i] * numbers[i]
//   }
//   return result
// };







