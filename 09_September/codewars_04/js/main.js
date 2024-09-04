/*
8 kyu
Grasshopper - Personalized Message

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise

*/
/* ==================================================================================================================== */
// #1
const greet = (name, owner) => {
  return (name === owner) ? 'Hello boss' : 'Hello guest'
};

// #2
// const greet = (name, owner) => {
//   if(name === owner) {
//     return 'Hello boss'
//   }  else {
//     return 'Hello guest'
//   }
// };






