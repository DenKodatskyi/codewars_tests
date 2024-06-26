/*
7 kyu
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
/* ==================================================================================================================== */

// #1
const XO = (str) => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;

// #2
// const XO = (str) => {
//   let letterX = ''
//   let letterO = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === 'x') {
//       letterX += str[i]
//     } else {
//       letterO += str[i]
//     }
//   }
//   return letterX.length === letterO.length;
// };



