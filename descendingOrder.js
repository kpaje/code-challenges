//make a function that can take any non-negative integer as a argument and return it with its digits in descending order

//Compare function; if a < b, compareNumbers returns a negative number. If a > b, it will be positive. If equal, it returns 0.
function descendingOrder(number) {
	function compareNumbers(a, b) {
		return b - a;
	}

	return Number(
		number
			.toString()
			.split("")
			.sort(compareNumbers)
			.join("")
	);
}

//ParseInt, sorts in ascending order then reverses it
// function descendingOrder(n) {
// 	return parseInt(
// 		String(n)
// 			.split("")
// 			.sort()
// 			.reverse()
// 			.join("")
// 	);
// }

console.log(descendingOrder(21445));
