var randNum = Math.random();
var computerChoice;

if (randNum >= 0.33) {
	computerChoice = "rock";
} else if (randNum > 0.33 && randNum < 0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

$('#rock').click(function(){
   var userChoice = "rock"

   if(computerChoice === "rock"){
      $('#results').html("It's a tie.");
   } else if(computerChoice === "paper"){
      $('#results').html("Paper covers rock. You lose.");
   } else {
      $('#results').html("Rock crushes scissors. You win!");
   }
});

$('#paper').click(function(){
   var userChoice = "paper"

   if(computerChoice == "paper"){
      $('#results').html("It's a tie.");
   } else if(computerChoice == "rock"){
      $('#results').html("Paper covers rock. You win!");
   } else {
      $('#results').html("Scissors cut paper. You lose.");
   }
});

$('#scissors').click(function(){
   var userChoice = "scissors"

   if(computerChoice == "scissors"){
      $('#results').html("It's a tie.");
   } else if(computerChoice == "paper"){
      $('#results').html("Scissors cut paper. You win!");
   } else {
      $('#results').html("Rock crushes scissors. You lose.");
   }
});