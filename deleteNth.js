//Delete occurrences of an element if it occurs more than n times

// function deleteNth(arr, n) {
//   var obj = {};

//   return arr.filter(function(x) {
//     obj[x] = (obj[x] || 0) + 1;
//     return obj[x] <= n;
//   });
// }

function deleteNth(arr, n) {
  // Create an empty object to store how many times each object exists
  var cache = {};
  // Call the filter function, the delegate is called once for each item
  // in the array and you return true or false depending on if it should
  // be kept or not
  return arr.filter(function(item) {
    // Use the item as key and store the number of times the item has appeared.
    // (cache[item]||0) fetches the current value of cache[item] or zero if it doesn't
    // exist. Then add one to it and store it.

    // cache[item] = (cache[item] || 0) + 1;

    // (cache[item] || 0) + 1 is meant to be a shorthand of:
    if (typeof cache[item] === "undefined") {
      cache[item] = 0;
    }
    cache[item] += 1;

    console.log(cache[item]);

    // If the number of times it has appeared in the array is less or equal to
    // the limit then return true so the filter function keeps it.
    return cache[item] <= n;
  });
}

// function deleteNth(arr, n) {
//   var count = 0;
//   //loop backwards so it removes duplicates from the right
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count += 1;
//       }
//     }
//     if (count > n) {
//       arr.splice(i, 1);
//       i = arr.length;
//     }
//     count = 0;
//   }
//   return arr;
// }

console.log(deleteNth([20, 37, 20, 21], 1)); // return [20,37,21]
