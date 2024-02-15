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


let playerCharacter = ""; // Variable to store player's chosen character

function chooseCharacter(character) {
    console.log("character chosen:" , character); // Check if this message appears in the console
    playerCharacter = character;
    document.getElementById("characterSelection").style.display = "none"; // Hide character selection after choosing 
    updatePlayerOneName(character); // Update Player One name with selescted character's name
    startGame(); // Start the game after character selection
    toggleCharacterOpacity(character); // Toggle opacity for selected and unselected characters

}

function updatePlayerOneName(character) {
    // Map character names to their corresponding player names
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

    // Get the player name based on the selected character
    const playerName = playerNames[character];
    
    // Update the player one name element with the selected character's name
    document.getElementById("playerOneName").textcontent = playerName; 

}

function startGame() {
    // Game logic here , using playerCharacter variable 

}    

function toggleCharacterOpacity(selectedCharacter) {
    const characters = document.querySelectorAll(".character");

    characters.forEach(character => {
        const characterName = character.getAttribute("onclick").split("'")[1];
        if (characterName === selectedCharacter) { 
            character. classList.add("selected-character");
        } else {
            character.classList.remove("Selected-character");

        }

     });

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
