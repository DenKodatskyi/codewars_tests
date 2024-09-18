/*
7 kyu Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
/* ==================================================================================================================== */

// #1
const getCount = (str) => {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length
};

// #2
// const getCount = (str) => {
//   let count = 0;
//   for(let i = 0; i < str.length; i++) {
//     if('aeiou'.includes(str[i])) {
//       count += 1
//     }
//   }
//   return count;
// };





