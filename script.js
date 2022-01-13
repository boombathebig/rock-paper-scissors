
   // Define a variable for the computerScore and the playerScore // 
   let playerScore= 0  
   let computerScore= 0;
   

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
   // ROUND FUNCTION, on user button click, COMPARES TO RANDOMLY GENERATED RESPONSE FROM COMPUTER, ADDS TO OVERALL
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
            checkScore();
        }

// identify all three buttons
const buttons = document.querySelectorAll(`.images`)
buttons.forEach((btn) => {btn.addEventListener("click",(e) => {
    round(e.target.id);
})});

// identify the scoreboard
scoreBoard = document.querySelector('.score');
runningScore= document.querySelector(`.runningScore`)

// function to check score & clear score if either side hits 5. 
function checkScore(){ 
    if (playerScore ===5) {
    runningScore.textContent=(`YOU WIN, FIRST TO FIVE! PLAYER: ${playerScore}  COMPUTER: ${computerScore}. Choose Rock, Paper, or Scissors to play again`);
    computerScore=0;
    playerScore=0;
    } else if(computerScore ===5){
        runningScore.textContent=(`YOU LOSE, FIRST TO FIVE! PLAYER: ${playerScore}  COMPUTER: ${computerScore}. Choose Rock, Paper, or Scissors to play again`);
        computerScore=0;
        playerScore=0;
    }
};
