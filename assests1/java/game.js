

            //letters  
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

            // set var
    var wins = 0;
    var losses = 0;
    var guessChoices = [];
    var numGuesses = 10;

            //
    document.onkeyup = function(event) {
    var userGuess = event.key;

            //random method 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

           // Check if a value exists in the fruits array

       if (guessChoices.includes(userGuess)) {
           console.log(userGuess)
            //alert("Value does not exists!")
           alert("Value exists!")

       }  else if (options.indexOf(userGuess) > -1) {
           console.log("Value does not exists!")

           // if wins
       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 10;
           guessChoices = [];
       }
           // push to user guess arrays
       else if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       else if (numGuesses === 0) {
       numGuesses = 10;
       losses ++;
       guessChoices = [];
       alert("Lets start over!");
   }
}
    // push change to html
   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   }          