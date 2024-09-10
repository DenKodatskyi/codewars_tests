/*
8 kyu
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


*/
/* ==================================================================================================================== */

// №1
const sumMix = (x) => {
  return x.map((num) => parseInt(num)).reduce((prev, curr) => prev + curr, 0);
};





