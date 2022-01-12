
   // Define a variable for the computerScore and the playerScore // 
   let playerScore= 0  
   let computerScore= 0;
   // event listeners tying buttons (pictures) to player choices

   // Creates a function that randomly selects rock, paper or scissors for computerChoice
   function computerPlay() {
    let rnd= Math.random();

    if (rnd <= 0.33){
           return `rock`;
       } else if (rnd <= 0.66){
           return `paper`;
       } else {
           return `scissors`;
       }
   }
   // ROUND FUNCTION, PROMPTS USER FOR INPUT, COMPARES TO RANDOMLY GENERATED RESPONSE FROM COMPUTER, ADDS TO OVERALL
   // SCORE VARIABLES BELOW, PRINTS OUT THE CURRENT SCORE.
   function round(pChoice) {

    playerSelection = pChoice;
    console.log(playerSelection)
    computerSelection = computerPlay();
    
       if (playerSelection === `rock`){
           if (computerSelection === `rock`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}. It's a Tie!`);
            
           } else if (computerSelection === `paper`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose!`);
            computerScore++;
           } else{
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++;
           }

       }else if(playerSelection ==="paper") {
        if (computerSelection === `rock`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++;
           } else if (computerSelection === `paper`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  It's a Tie!`);
           } else{
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose!`);
            computerScore++;
           }
        }else if(playerSelection=== `scissors`){
        if (computerSelection === `rock`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Lose`);
            computerScore++;
           } else if (computerSelection === `paper`){
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  You Win!`);
            playerScore++
           } else{
            scoreBoard.textContent=(`You chose ${playerSelection} and the computer chose ${computerSelection}.  It's a Tie!`);
           }
       } else{
           throw `You didn't put in Rock Paper or Scissors... try again...`;
       }
       runningScore.textContent=(`The Current Score is Player: ${playerScore} to Computer: ${computerScore}`);
   }

// identify all three buttons
const buttons = document.querySelectorAll(`.images`)
buttons.forEach((btn) => {btn.addEventListener("click",(e) => {
    round(e.target.id);
})});

// identify the scoreboard
scoreBoard = document.querySelector('.score');
runningScore= document.querySelector(`.runningScore`)


// the event listener should also run the game. 

// loop, runs through round function 5x and reports out winner at the end. 
// function for announcing total score
