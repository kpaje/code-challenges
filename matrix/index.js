// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     //Assemble top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     //Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     //Bottom row
//     //[ [ 1, 2, 3 ],
//     //  [ 10, 9, 4 ],
//     //  [ 7, 6, 5 ] ]
//     for (let i = endColumn; i >= startColumn; i--) {
//       //results[2] i = [1]
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     //Start Column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;

//   }

//   return results;
// }

function matrix(n) {
  const results = [];

  // returns [ [],
  //           [],
  //           [] ]
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // Values of these vars are going to change over time
  // Starting while loop: while(0 <= 2 && 0 <= 2)
  // Updated while loop: while(1 <= 1 && 1 <= 1)
  while (startColumn <= endColumn && startRow <= endRow) {
    //Assemble top row
    //[ [ 1, 2, 3 ],
    //  [ 4, 5, 6 ],
    //  [ 7, 8, 9 ] ]
    //Note this is how it would look like if this was the only for loop in the while statement
    //Comments are for the first run of all 4 for loops
    for (let i = startColumn; i <= endColumn; i++) {
      //results[0] i = 0
      results[startRow][i] = counter;
      counter++;
    }
    // returns startRow = 1 for the second loop
    startRow++;

    //Right column
    //[ [ 1, 2, 3 ],
    //  [ 6, 7, 4 ],
    //  [ 9, 8, 5 ] ]
    for (let i = startRow; i <= endRow; i++) {
      //results[1] endColumn = [2]
      results[i][endColumn] = counter;
      counter++;
    }
    // returns endColumn = 1 for the third loop
    endColumn--;

    //Bottom row
    //[ [ 1, 2, 3 ],
    //  [ 10, 9, 4 ],
    //  [ 7, 6, 5 ] ]
    for (let i = endColumn; i >= startColumn; i--) {
      //results[2] i = [1]
      results[endRow][i] = counter;
      counter++;
    }
    // returns endRow = 1 for the fourth loop
    endRow--;

    //Start Column
    //[ [ 1, 2, 3 ],
    //  [ 8, 9, 4 ],
    //  [ 7, 6, 5 ] ]
    for (let i = endRow; i >= startRow; i--) {
      //results[1] startColumn = 0
      results[i][startColumn] = counter;
      counter++;
    }
    //returns startColumn = 1 for the first for loop
    startColumn++;

    //Go back up and look at the updated while loop
  }

  return results;
  //   return console.log(results);
}

matrix(3);
module.exports = matrix;
