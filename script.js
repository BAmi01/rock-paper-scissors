// Variables to track scores for Player One and KillerBee
let playerOneScore = 0;
let killerbeeScore = 0;
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
    } else if (result === "Fatality! KillerBee Wins!") {
        killerbeeScore++;
    } else {
        tieScore++;
    }

    console.log("Player One Score: ", playerOneScore);
    console.log("KillerBee Score: ", killerbeeScore);
    console.log("Tie Score: ", tieScore);

    document.getElementById("playerOneScore").textContent = "Player Score: " + playerOneScore;
    document.getElementById("killerbeeScore").textContent = "KillerBee Score: " + killerbeeScore;
    document.getElementById("tieScore").textContent = "Tie Score: " + tieScore;
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
        return "Fatality! KillerBee Wins!";
    }
}

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerCharacter = ""; // Variable to store player's chosen character

function chooseCharacter(character) {
    console.log("character chosen:", character);
    playerCharacter = character;
    document.getElementById("characterSelection").style.display = "none";
    updatePlayerOneName(character);
    displaySelectedCharacterProfile(character);
    updatePlayerOneScoreName(character);
}

function updatePlayerOneName(character) {
    const playerNames = {
        'baraka': 'Baraka',
        'jade': 'Jade',
        'scorpion': 'Scorpion',
        'mileena': 'Mileena',
        'raiden': 'Raiden',
        'sindel': 'Sindel',
        'jax': 'Jax',
        'subzero': 'Sub-Zero'
    }
    const playerName = playerNames[character];
    document.getElementById("playerOneName").textContent = playerName;
}

function updatePlayerOneScoreName(character) {
    const playerNames = {
        'baraka': 'Baraka',
        'jade': 'Jade',
        'scorpion': 'Scorpion',
        'mileena': 'Mileena',
        'raiden': 'Raiden',
        'sindel': 'Sindel',
        'jax': 'Jax',
        'subzero': 'Sub-Zero'
    }
    const playerName = playerNames[character];
    document.getElementById("playerOneScore").textContent = playerName + " Score: " + playerOneScore;
}

function displaySelectedCharacterProfile(character) {
    // You can add code here to display the selected character profile under the Player One label.
    // For example, you can create a div with the selected character's image and details.
}

// Other functions...
