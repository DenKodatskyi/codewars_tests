/*
8 kyu
If you can't sleep, just count sheep!!

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/
/* ==================================================================================================================== */
// #2
const countSheep = (num) => {
  let res = '';
  for (let i = 1; i <= num; i++) {
    res += i + ' sheep...'
  }

  return res
};






