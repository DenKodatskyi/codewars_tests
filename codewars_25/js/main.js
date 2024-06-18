/*
8 kyu
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.

*/
/* ==================================================================================================================== */

// #1
const invert = (array) => {
  return array.map((elem) => -elem);
};

// #2
// const invert = (array) => {
//   let newArr = []
//   for(let i = 0; i < array.length; i++) {
//     newArr.push(-array[i])
//   }
//   return newArr
// };

