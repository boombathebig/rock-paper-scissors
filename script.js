
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
    playerSelection= playerSelection.toLowerCase();
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
// loop, runs through round function 5x and reports out winner at the end. 
   function game() {
       for (let i = 0; i<5; i++) {
           round();
       }
       (playerScore > computerScore) ? console.log(`Player wins best of 5!`) : console.log(`Computer wins best of 5!`);
   }
   // function for announcing total score

   function scoreAnnounce() {
   console.log(`The score is  PLAYER:${playerScore}       COMPUTER:${computerScore}`);
   };