
   // Define a variable for the computerScore and the playerScore // 
   let playerScore= 0  
   let computerScore= 0;
   // Creates a function that randomly selects rock, paper or scissors for computerChoice
   function computerPlay() {
    let rnd= Math.random();

    if (rnd <= 0.33){
           return `Rock`;
       } else if (rnd <= 0.66){
           return `Paper`;
       } else {
           return `Scissors`;
       }
   }
   // ROUND FUNCTION, PROMPTS USER FOR INPUT, COMPARES TO RANDOMLY GENERATED RESPONSE FROM COMPUTER, ADDS TO OVERALL
   // SCORE VARIABLES BELOW, PRINTS OUT THE CURRENT SCORE.
   function round() {

    playerSelection = prompt(`Please choose Rock, Paper, or Scissors`);
    computerSelection = computerPlay();
       if (playerSelection === `rock`){
           if (computerSelection === `Rock`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  It's a tie!`);
           } else if (computerSelection === `Paper`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose!`);
            computerScore++;
           } else{
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++;
           }

       }else if(playerSelection ==="paper") {
        if (computerSelection === `Rock`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++;
           } else if (computerSelection === `Paper`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  It's a Tie!`);
           } else{
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose!`);
            computerScore++;
           }
        }else if(playerSelection=== `scissors`){
        if (computerSelection === `Rock`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose`);
            computerScore++;
           } else if (computerSelection === `Paper`){
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++
           } else{
            console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.  It's a Tie!`);
           }
       } else{
           throw `You didn't put in Rock Paper or Scissors... try again...`;
       }
       scoreAnnounce();
   }
// event listeners tying buttons (pictures) to player choices
const buttons= document.querySelectorAll(".images");
// identify all three buttons

buttons[1].addEventListener("click", function() {
    round();
    console.log("");
})
// add event listeners for each one, on click assign the id of the image to the computer choice variable 
// the event listener should also run the game. 

// loop, runs through round function 5x and reports out winner at the end. 
// function for announcing total score
