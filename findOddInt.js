//Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times.

//Takes array[i] and compares it against all indexes of array[j]
function findOdd(array) {
	var count = 0;

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] == array[j]) {
				count++;
			}
		}
		if (count % 2 != 0) {
			return array[i];
		}
	}
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
