/*
8 kyu Sum without highest and lowest number

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/
/* ==================================================================================================================== */

const sumArray = (array) => {
  if (array === null || array === undefined || array.length < 3) {
    return 0
  }

  let sum = array.reduce((prev, curr) => prev + curr, 0);
  let min = array.sort((a, b) => a - b)[0]
  let max = array.sort((a, b) => b - a)[0]

  return sum - min - max
};




