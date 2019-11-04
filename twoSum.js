// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// O(n^2)
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && i != j) {
//         return [i, j];
//       }
//     }
//   }
// };

// O(n)
var twoSum = function(nums, target) {
  var pairs = {};

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (pairs[complement] !== undefined && pairs[complement] !== i) {
      return [pairs[complement], i];
    }
    pairs[nums[i]] = i;
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
