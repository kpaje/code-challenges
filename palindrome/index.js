// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   var reversed = "";
//   reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   if (str == reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

//ES6
function palindrome(str) {
  let reversed = str
    .split("")
    .reverse()
    .join("");
  //   return str === reversed ? true : false;

  //This also works
  return str === reversed;
}

//Every() method
// [a,b,c,b,a]; compares from outside in or first to last
// str[str.length - index - 1], index starts at 0, but there are 5 elements, subract index to increment through the loop, then substract 1 to start at last index
// function palindrome(str) {
// 	return str.split("").every((char, index) => {
// 		return char === str[str.length - index - 1];
// 	});
// }

module.exports = palindrome;
