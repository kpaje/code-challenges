// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Main point of this strategy is to remove the spaces first, instead of searching for spaces then modifying
//Slice() pushes or rather inserts the rest of the word back into the array
// ex: word[0].toUpperCase() = 'C'; word.slice(1) = 'apitalize'
function capitalize(str) {
  const words = [];

  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

//Checks if index to the left contains a space
//for statement start at i = 1 because first letter is always capitalized
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   console.log(str);

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

capitalize("capitalize is a function");

module.exports = capitalize;
