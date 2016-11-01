/**
 * PART 0
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
 */

function sum(a, b){
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 */

function GCD(a, b){
  if (b === 0){
    return a;
  } else {
    var remainder = a % b;
    return GCD(b,remainder);
  }
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3
 */

function LCM(a, b){
    if ((typeof a !== 'number') || (typeof b !== 'number'))
    return false;
    return (!a || !b) ? 0 : Math.abs((a * b) / GCD(a, b));
}

function GCD(a, b){
  if (b === 0){
    return a;
  } else {
    var remainder = a % b;
    return GCD(b,remainder);
  }
}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 0)


/**
 * Part 4
 */

function fizzbuzz(N){
  var result = "";
  for (var i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !==0) {
      result = result + ".";
    }else if (i % 3 === 0 && i % 5 !== 0) {
      result = result + "fizz";
    }else if (i % 3 !== 0 && i % 5 === 0) {
      result = result + "buzz";
    }else if (i % 3 === 0 && i % 5 === 0) {
      result = result + "fizzbuzz";
    }
  }
    return result;
  }

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

//Credit Card Assignement

function isValid(ccnum){
var ccNoSpace = ccnum.replace(/\s/g, '');

if (ccNoSpace.length != 16){
  return false;
}
var numString = '';
for (var i = ccNoSpace.length - 1; i >= 0; i--) {
  var number = ccNoSpace[i];

if (i % 2){
  numString += '' + (number*2) + '';
} else {
  numString += '' + number + '';
  }
}
var arrayOfNumbers = numString.split('');

 var total = arrayOfNumbers.reduce(function(a,b) {
   return parseInt(a) + parseInt(b);
     }, 0);

 var valid = total % 10 === 0;

return valid;
}

console.assert(isValid("4408 0412 3456 7893") === true)
console.assert(isValid("5000000000000000") === false)
