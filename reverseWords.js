// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
	return str
		.split("") //split into array for each letter
		.reverse() //reverse entire array
		.join("") // join into string = .god yzal eht revo spmuj xof nworb kciuq ehT
		.split(" ") // split into array by spaces [ '.god','yzal','eht','revo','spmuj','xof','nworb','kciuq','ehT' ]
		.reverse() //reverse entire array again = [ 'ehT','kciuq','nworb','xof','spmuj','revo','eht','yzal','.god' ]
		.join(" "); // join by spaces = ehT kciuq nworb xof spmuj revo eht yzal .god
}

//ES6 mapping
// function reverseWords(str) {
// 	return str
// 		.split(" ")
// 		.map(function(word) {
// 			return word
// 				.split("")
// 				.reverse()
// 				.join("");
// 		})
// 		.join(" ");
// }
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
