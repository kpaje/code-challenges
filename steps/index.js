// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterative solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }

//     console.log(stair);
//   }
// }

//recursion solution
//checks from base solutions that apply in order:
//Does n = 0? return. Meaning, there are 0 rows and 0 columns
//Does the stair/string = n? Create another row, then recurse function, thus running through the base solutions again in order
//Does the stair/string length have <= row? Add # or space accordingly, then recurse
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
