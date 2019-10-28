// write a function that takes a string and return a new string with all vowels removed

//regex
// g = global, find all matches than stopping at first match
// i = case Insensitive
function disemvowel(str) {
	return str.replace(/[aeiou]/gi, "");
}

//ES6
// disemvowel = str => str.replace(/[aeiou]/gi, "");

//Switch Statment
// var arr = str.split('');
// var answerArr = [];

// for(var i=0; i<arr.length; i++) {
//   switch (arr[i].toLowerCase()) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       break;
//     default:
//       answerArr.push(arr[i]);
//   }
// }
// return answerArr.join('');

//Filter method
// function disemvowel(str) {
// 	var vowels = ["a", "e", "i", "o", "u"];

// 	return str
// 		.split("")
// 		.filter(function(el) {
// 			return vowels.indexOf(el.toLowerCase()) == -1;
// 		})
// 		.join("");
// }

console.log(disemvowel("This website is for losers LOL!"));
