// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

//toFixed() sets decimal places
// function SeriesSum(n) {
//   let sum = 0;
//   let series = 1;
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       sum = 1;
//     } else {
//       series += 3;
//       sum = sum + 1 / series;
//     }
//   }
//   return sum.toFixed(2);
// }

//Refactored sum into for statement, += adds value of 1 / (1 + i * 3) to current sum
//sum += 1 / (1 + 1 * 3);
//sum += 1 / (4);
//sum = 1 + 1/4;

//sum += 1 / (1 + 2 * 3);
//sum += 1 / (7);
//sum = 1 + 1/4 + 1/7;

//sum += 1 / (1 + 3 * 3);
//sum += 1 / (10);
//sum = 1 + 1/4 + 1/7 + 1/10;
function SeriesSum(n) {
  for (var sum = 0, i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}
console.log(SeriesSum(5));

// Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")
// Test.assertEquals(SeriesSum(5), "1.57")
