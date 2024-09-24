/*
7 kyu Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/
/* ==================================================================================================================== */

// #1
const highAndLow = (numbers) => {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

// #2
// const highAndLow = (numbers) => {
//   let arr = numbers.split(' ')
//   return `${arr.sort((a, b) => b - a)[0]} ${arr.sort((a, b) => a - b)[0]}`
// };



