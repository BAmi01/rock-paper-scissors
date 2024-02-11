// Variables to track scores for Player One and Computer
let playerOneScore = 0;
let computerScore = 0;
let tieScore = 0;

// Function to play the game
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("gameResults").textContent = "Results: " + result;
    updateScore(result);
}

// Function to update scores
function updateScore(result) {
    if (result === "Fatality! Player One Wins!") {
        playerOneScore++;
     } else if (result === "Fatality! Computer Wins!") {
        computerScore++;
     }  else {
          tieScore++;
     }
     document.getElementById("playerOneScore"). textContent = "Player One Score: " + playerOneScore;
     document.getElementById("computerScore"). textContent = "Computer Score: " + computerScore;
     document.getElementById("tieScore"). textContent = "Tie Score:" + tieScore;
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie...but next time it won't be!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return "Fatality! Player One Wins!";
        } else { 
            return "Fatality! Computer Wins!";
        }
    }

    // Function to generate computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
