// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative solution, linear runtime
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     // const a = result[result.length]  /same as line 16 below
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }
//   return result[n];
// }

//Recursive solution
//O(2^N) Exponential time solution, larger n takes exponentially longer to solve
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

//Memoized solution
function memoize(fn) {
  //Result of slowFib(n) stored in cache object, only if it had never been called before
  const cache = {};
  // ...args dumps all of the arguments as an array
  return function(...args) {
    //If result of slowFib(n) had been called before, meaning cache[args] == true, return
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

//Memoization of function fib(n) calls on fib = memoize(fib);
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
