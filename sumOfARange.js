// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
function range(start, end, step) {
  if (step == null) step = 1;
  let array = [];
  
  if (step > 0) {
    for (let i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (let i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
