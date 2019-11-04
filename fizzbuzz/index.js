// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// modulo returns remainder after division, 10 % 3 = 1; 3 * 3 = 9 , remainder 1
// order matters, (i % 3 === 0 && i % 5 === 0) has to be first because cases like number 15 will calculate to fizz or buzz
function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		// (i % 15 === 0) also works
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
		} else if (i % 5 === 0) {
			console.log("buzz");
		} else if (i % 3 === 0) {
			console.log("fizz");
		} else {
			console.log(i);
		}
	}
}

module.exports = fizzBuzz;
