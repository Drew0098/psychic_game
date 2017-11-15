var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'];
var pickRandom = randomLetter[Math.floor(Math.random() * randomLetter.length)];
var html = "<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + guessesSoFar.join(', ') + "</p>";

	document.getElementById("game").innerHTML = html;

reset();
random();

document.onkeyup = function(event) {
	var playerGuess = event.key;
	guessesSoFar.push(playerGuess);
	if (playerGuess == pickRandom) {
		alert("Congratulations!!! You Win!!!");
		wins++;
		reset();
		html = "<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses so far: " + guessesSoFar.join(', ') + "</p>";		

		document.getElementById("game").innerHTML = html;
	} else if (playerGuess !== pickRandom) {
		guessesLeft--;
		html = "<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses so far: " + guessesSoFar.join(', ') + "</p>";

		document.getElementById("game").innerHTML = html;
	} if (guessesLeft === 0) {
		confirm("Would you like to try again?");
		losses++;
		reset();
	}
}
function reset() {
	guessesLeft = 9;
	guessesSoFar.length = 0;
	html = "<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + guessesSoFar.join(', ') + "</p>";

	document.getElementById("game").innerHTML = html;
}
function random() {
	pickRandom;
}