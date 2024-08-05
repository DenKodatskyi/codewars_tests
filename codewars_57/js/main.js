/*
8 kyu
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/
/* ==================================================================================================================== */

// #1
const fakeBin = (x) => x.split('').map((num) => num < 5 ? 0 : 1).join('');

// #2
// const fakeBin = (x) => {
//   let result = ''
//   for(let i = 0; i < x.length; i++) {
//     if(x[i] < 5) {
//       result += 0
//     } else if(x[i] >= 5)
//     result += 1
//   }
//   return result
// };





