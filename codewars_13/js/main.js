/*
8 kyu
Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
// ====================================================================================================================

// #1
const nameShuffler = (str) => {
  return str.split(' ').reverse().join(' ');
}

// #2
// const nameShuffler = (str) => {
//   let firstName = ''
//   let lastName = ''
//   let space = 'firstName'
  
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === ' ') {
//       space = 'lastName'
//       continue
//     }
//     if(space === 'firstName') {
//       firstName += str[i]
//     } else {
//       lastName += str[i]
//     }
//   }
//   return `${lastName} ${firstName}`
// };



