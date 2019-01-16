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


var $wins = document.getElementById("winTotal");
var $losses = document.getElementById("lossesTotal");
var $guesses = document.getElementById("guesses");
var alphabet = generateAlphabet();
var $alreadyGuessed = document.getElementById("already-guessed");

document.querySelector("#guesses").innerHTML = 9;
document.querySelector("#winTotal").innerHTML = 0;
document.querySelector("#lossesTotal").innerHTML = 0;

console.log($alreadyGuessed);

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log("Computer Guess:", computerGuess);
var alreadyGuessedArr = [];

document.onkeyup = function (event) {
  if (alreadyGuessedArr.length <= 9) {
    var userGuess = event.key.toLowerCase();

    alreadyGuessedArr.push(userGuess);


    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");


    //if else statement to set value of wins, losses, and computerGuess
    if (userGuess !== computerGuess) {
      guesses--;
      document.querySelector("#guesses").innerHTML = guesses;
      console.log("Guesses:", guesses);
    }
    else {
      wins++;
      document.querySelector("#winTotal").innerHTML = wins;
      console.log("Wins:", wins);
      guesses = 8;
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      alreadyGuessedArr = [];
      console.log("Computer Guess:", computerGuess)
    }

    if (guesses === 0) {
      losses++;
      document.querySelector("#lossesTotal").innerHTML = losses;
      console.log("Losses: ", losses);
      guesses = 8;
      alreadyGuessedArr=[];
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("Computer Guess:", computerGuess)

    } 
  }
 

  else {
    alreadyGuessedArr = [];

  }


}
