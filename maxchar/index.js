// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// forof statement to iterate through each element of array or string
// forin statement iterates through the properties of an object
// checks if the character has been counted, if uncounted (meaning 'undefined') it assigns 1 to it's key/value pair. If already 1, it increments
function maxChar(str) {
	let obj = {};
	let max = 0;
	let maxChar = "";

	for (let char of str) {
		// (!obj[char]) also works
		if (obj[char] == undefined) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}
	}

	for (let char in obj) {
		if (obj[char] > max) {
			max = obj[char];
			maxChar = char;
		}
	}

	return maxChar;
}

// another variety for if/else
// function maxChar(str) {
// let obj = {};
// let max = 0;
// let maxChar = "";

// 	for (let char of str) {
// 		if (obj[char]) {
// 			obj[char]++;
// 		} else {
// 			obj[char] = 1;
// 		}
// 	}

// 	for (let char in obj) {
// 		if (obj[char] > max) {
// 			max = obj[char];
// 			maxChar = char;
// 		}
// 	}

// 	return maxChar;
// }

// ES6
// function maxChar(str) {
// let obj = {};
// let max = 0;
// let maxChar = "";

// 	// chars[char] + 1 by itself adds 1 to undefined which returns null, so checks if results in null otherwise assign 1
// 	for (let char of str) {
// 		obj[char] = obj[char] + 1 || 1;
// 	}

// 	for (let char in obj) {
// 		if (obj[char] > max) {
// 			max = obj[char];
// 			maxChar = char;
// 		}
// 	}

// 	return maxChar;
// }

module.exports = maxChar;
