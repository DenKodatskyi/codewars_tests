/*
8 kyu
Check same case

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
// ====================================================================================================================

const isNotLetter = (str) => str === str.toUpperCase() && str === str.toLowerCase();
const defineCase = (str) => str === str.toUpperCase() ? 'UpperCase' : 'LowerCase';

function sameCase(a, b) {
  if (isNotLetter(a) || isNotLetter(b)) {
    return -1
  }
  return defineCase(a) === defineCase(b) ? 1 : 0;
}



