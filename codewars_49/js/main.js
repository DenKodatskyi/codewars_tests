/*
8 kyu
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/
/* ==================================================================================================================== */

// #1
const abbrevName = (name) => {
  return name.split(' ').map((i) => i[0].toUpperCase()).join('.')
};

// #2
// const abbrevName = (name) => {
//   let result = name[0].toUpperCase();
  
//   for(let i = 0; i < name.length; i++) {
//     if(name[i] === ' ') {
//       result += '.' + name[i + 1].toUpperCase()
//     }
//   }

//   return result
// };





