// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//iterative solution
// function vowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[aeiou]/gi, "")) {
//       count++;
//     }
//   }
//   return count;
// }

//Another iterative with for of statement
// function vowels(str) {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

//regex fun
//takes into account if no matches are found, return 0 instead of null
function vowels(str) {
  const matches = str.match(/[aeiou]/gi, "");
  return matches ? matches.length : 0;
}

module.exports = vowels;
