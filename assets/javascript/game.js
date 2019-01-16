//var computerGuess = computerChoices[(Math.random() * computerChoices.length)];
//get random letters below
function generateAlphabet() {
  var arr = [];
  for (var i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
//win/loss/guess variables
var wins = 0;
var losses = 0;
var guesses = 9;

var alphabet = generateAlphabet();
var $alreadyGuessed = document.getElementById("already-guessed");
console.log($alreadyGuessed);

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log("Computer Guess:", computerGuess);
var alreadyGuessedArr = [];

document.onkeyup = function (event) {
  var userGuess = event.key;
  alreadyGuessedArr.push(userGuess);


  $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");

  if (userGuess !== computerGuess) {
    guesses--;
    console.log("Guesses:", guesses);
  }
  else {
    wins++;
    console.log("Wins:", wins);
    guesses = 9;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer Guess:", computerGuess)
  }

  if (guesses === 0) {
    losses++;
    console.log("Losses: ", losses);
    guesses = 9;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer Guess:", computerGuess)
  }

}


//for loop where when i hits 8 losses goes up by one?
//if statement with if(userGuess!==computerGuess) responds with losses++
// Guesses Left--
//else wins ++
//