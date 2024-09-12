/*
8 kyu Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/
/* ==================================================================================================================== */

// #1
const removeExclamationMarks = (s) => {
  return s.replaceAll('!', '');
};

// #2
// const removeExclamationMarks = (s) => {
//   return s.split('!').join('');
// };



