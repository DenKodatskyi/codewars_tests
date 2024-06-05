/*
8 kyu
Short Long Short

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/
// ====================================================================================================================

// #1
const solution = (a, b) => {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
  };

// #2 
// const solution = (a, b) => {
//   if(a.length > b.length) return `${b}${a}${b}`
//   else return `${a}${b}${a}`
// };

// #3
// const solution = (a, b) => {
//   let short = '';
//   let long = '';

//   if(a.length > b.length) {
//     short = b
//     long = a
//   } else {
//     short = a
//     long = b
//   }
  
//   return `${short}${long}${short}`
// };



