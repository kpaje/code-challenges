// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of string by removing 'WUB'. Separate the words with a space.

//filter()
function songDecoder(song) {
	return song
		.split("WUB")
		.filter(el => el != "")
		.join(" ");
}

//.replace() and regex, .trim() removes whitespace from both ends of a string
// function songDecoder(song) {
// 	return song.replace(/(WUB)+/g, " ").trim();
// }

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// =>  WE ARE THE CHAMPIONS MY FRIEND
