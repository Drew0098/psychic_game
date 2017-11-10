var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'];
var html = "<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + guessesSoFar.join(', ') + "</p>";

	document.getElementById("game").innerHTML = html;
reset();

document.onkeyup = function(event) {
	var playerGuess = String.fromCharCode(event.keycode).toLowerCase();
	guessesSoFar.push(playerGuess);
	if (playerGuess == pickRandom) {
		wins++;
		reset();
	} else if (playerGuess !== pickRandom) {
		guessesLeft--;
	} else (guessesLeft == 0) {
		losses++;
		reset();
	}
}
function reset() {
	guessesLeft = 9;
	guessesSoFar.length = 0;
	var pickRandom = randomLetter[Math.floor(Math.random() * randomLetter.length)];
}