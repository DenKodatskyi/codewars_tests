/*
8 kyu
Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12

*/
/* ==================================================================================================================== */

// #1
const quarterOf = (month) => {
  return Math.ceil(month / 3);
}

// #2
// const quarterOf = (month) => {
//   return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
// };





