// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// var reverse = function(x) {
//   var result = x
//     .split("")
//     .reverse()
//     .join();

//   if (result > Math.pow(2, 31)) {
//     return 0;
//   }

//   return result;
// };

var reverse = function(x) {
  //if negative number, recursively multiply, to return positive version
  if (x < 0) return -1 * reverse(-x);
  //(x + "") converts to string
  const solution = (x + "")
    .split("") // [1,2,3]
    .reverse() // [3,2,1]
    .join(""); // 321
  if (solution > 2 ** 31 - 1) return 0;

  return solution;
};

//es6
// const reverse = x => {
//   if (x < 0) return -1 * reverse(-x);
//   const solution = (x + "")
//     .split("")
//     .reverse()
//     .join("");
//   return solution > 2 ** 31 - 1 ? 0 : solution;
// };

reverse(-123);
