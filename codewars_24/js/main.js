/*
8 kyu
Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/
/* ==================================================================================================================== */

// #1
const maps = (x) => {
  return x.map((elem) => elem * 2)
};

// #2
// const maps = (x) => {
//  let arr = []
//  for(let i = 0; i < x.length; i++) {
//    arr.push(x[i] * 2)
//  }
//   return arr
// };



