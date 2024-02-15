// Variables to track scores for Player One and KillerBee
let playerOneScore = 0;
let killerbeeScore = 0;
let tieScore = 0;
let playerCharacter = ""; // Variable to store player's chosen character

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

    document.getElementById("playerOneScore").textContent = "Player One Score: " + playerOneScore;
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

function chooseCharacter(character) {
    console.log("character chosen:", character);
    playerCharacter = character;
    document.getElementById("characterSelection").style.display = "none";
    updatePlayerOneName(character);
    displaySelectedCharacterProfile(character); // New function to display selected character profile
}

function displaySelectedCharacterProfile(character) {
    const selectedCharacterProfile = document.getElementById("selectedCharacterProfile");
    const characterImage = document.createElement("img");
    characterImage.src = character + " Medium.jpeg";
    characterImage.alt = character;
    selectedCharacterProfile.innerHTML = ""; // Clear previous content
    selectedCharacterProfile.appendChild(characterImage);
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
    document.getElementById("playerOneName").textContent = playerName; // Corrected method to update text content
}

// Function to start the game
function startGame() {
    // Reset scores
    playerOneScore = 0;
    killerbeeScore = 0;
    tieScore = 0;
    updateScore(""); // Update score display
}

// Function to get a random character for the computer
function getComputerCharacter() {
    const remainingCharacters = ["baraka", "jade", "scorpion", "mileena", "raiden", "sindel", "jax", "subzero"].filter(character => character !== playerCharacter);
    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    return remainingCharacters[randomIndex];
}
