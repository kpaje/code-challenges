// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Modulo operator gives the remainder of a division
function even_or_odd(number) {
	if (number % 2 == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

//ES6 Version
// function even_or_odd(number) {
// 	return number % 2 ? "Even" : "Odd";
// }

console.log(even_or_odd(750));
