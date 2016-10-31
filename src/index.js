/**
 * PART 0
 * Write a function that calculates the sum of all the numbers in an array
 */
function sumOfArray(arr){
  if (arr === []){
    return 0;
  }
    var sum = 0
    arr.forEach(function(i) {
      sum += i;
    })
    return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27)

/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
  if (b === 0){
    return a;
  } else {
    var remainder = a%b;
    return GCD(b,remainder);
  }
    // YOUR CODE HERE
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
