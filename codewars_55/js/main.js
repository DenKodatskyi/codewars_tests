/*
8 kyu
Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

*/
/* ==================================================================================================================== */

// #1
const greet = (name) => {
  return name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;
};

// #2
// const greet = (name) => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;

// #2
// const greet = (name) => {
//   if(name === 'Johnny') {
//     return 'Hello, my love!';
//   } else {
//   return `Hello, ${name}!`;
//   }
// };





