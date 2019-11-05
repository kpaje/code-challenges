// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];

//   for (const element of array) {
//     //retrieve last element in array, index starts at 0, so minus 1
//     const last = chunked[chunked.length - 1];
//     //check if last element does not exist, or size is fulfilled in the chunk
//     // pushes an array "chunk" inside the chunked array with the element; two steps in one!
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       //adds the current element into the pre-made chunk array
//       last.push(element);
//     }
//   }
//   return chunked;
// }

//Same as above without comments
// function chunk(array, size) {
//   const chunked = [];

//   for (const element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// slice(), select starting index, then end up to but not including selected element count; not length; ends at, but does not include, the given end argument.
// then it pushes as a new copy of array, original array is not changed
// const lettersExampleArray = ['a', 'b', 'c', 'd', 'e']
// lettersExampleArray.slice(1, 3) == ['b', 'c']
// lettersExampleArray.slice(0, 3) == ['a', 'b', 'c']
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
module.exports = chunk;
