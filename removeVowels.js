// write a function that takes a string and return a new string with all vowels removed

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, "");
}

//regex
// g = global, find all matches than stopping at first match
// i = case Insensitive

console.log(disemvowel("This website is for losers LOL!"));
