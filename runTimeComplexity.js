// RUNTIME COMPLEXITY (In order of fastest to slowest)
// ==================
// Constant Time = O(1)
// Logarithmic Time = O(log(N)); such as searching a sorted array
// Linear Time = O(N); such as a for loop over a single collection
// Quasilinear Time = O(N * log(N)); such as sorting
// Quadratic Time = O(N^2); such as two nested loops over the same collection
// Exponential Time = O(2^N)

// Also consider 'Space Complexity' or amount of memory/power needed to run

// String Reverse
// abc --> cba
// Each additional char = 1 step through 1 loop; essentially a 1 to 1 relationship of input/output
// Linear runtime or O(N)
function reverseInt(n) {
  const reverse = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reverse) * Math.sign(n);
}

// Steps, iterative
// As 'n' increased by 1, the steps (procesing power) to solve multiplies itself, or (n * n)
// Often nested for loops
// Quadratic runtime or O(N^2)
// --- Examples
//   n = 2; steps = 4
//       '# '
//       '##'
//   n = 3; steps = 9
//       '#  '
//       '## '
//       '###'
//   n = 4; steps = 16
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}
