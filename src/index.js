import './style.css';
import './startScreen.css';
import './setup.css'
import { Player } from "./js/objects/player.js"
import logoPath from "./assets/battleship_img_logo.png";

let player1;
let player2;

createStartScreen()

function startNewGame(){
    player1 = new Player()
    player2 = new Player();
}

function createStartScreen() {
    // Create the main start screen container
    const startScreen = document.createElement("div");
    startScreen.id = "startScreen";
    
    // Create the title container
    const startScreenTitle = document.createElement("div");
    startScreenTitle.id = "startScreenTitle";
    
    const logoImg = document.createElement("img");
    logoImg.src = logoPath;
    logoImg.alt = "";
    logoImg.id = "battleshipLogoImg";
    
    const titleText = document.createElement("div");
    titleText.textContent = "Battleship";
    
    startScreenTitle.appendChild(logoImg);
    startScreenTitle.appendChild(titleText);
    
    // Create options container
    const startScreenOptions = document.createElement("div");
    startScreenOptions.id = "startScreenOptions";
    
    // Play with a friend section
    const startScreenPlayWithFriend = document.createElement("div");
    startScreenPlayWithFriend.id = "startScreenPlayWithFriend";
    
    const player1Input = document.createElement("input");
    player1Input.type = "text";
    player1Input.name = "player1";
    player1Input.id = "player1";
    player1Input.placeholder = "Player 1";
    
    const player2Input = document.createElement("input");
    player2Input.type = "text";
    player2Input.name = "player2";
    player2Input.id = "player2";
    player2Input.placeholder = "Player 2";
    
    startScreenPlayWithFriend.appendChild(player1Input);
    startScreenPlayWithFriend.appendChild(player2Input);
    
    // Play against computer section
    const startScreenPlayAgainstComputer = document.createElement("div");
    startScreenPlayAgainstComputer.id = "startScreenPlayAgainstComputer";
    startScreenPlayAgainstComputer.textContent = "Against Computer";
    
    const againstComputerCheckbox = document.createElement("input");
    againstComputerCheckbox.type = "checkbox";
    againstComputerCheckbox.id = "againstComputer";
    
    startScreenPlayAgainstComputer.appendChild(againstComputerCheckbox);
    
    // Append options to options container
    startScreenOptions.appendChild(startScreenPlayWithFriend);
    startScreenOptions.appendChild(startScreenPlayAgainstComputer);
    
    // Create start button
    const startGameButton = document.createElement("button");
    startGameButton.id = "startGame";
    startGameButton.classList.add("button-5");
    startGameButton.textContent = "Start!";
    
    // Append everything to the main start screen container
    startScreen.appendChild(startScreenTitle);
    startScreen.appendChild(startScreenOptions);
    startScreen.appendChild(startGameButton);
    
    // Append the start screen to the body or a specific container
    document.body.appendChild(startScreen);

    // Event listener to disable and clear Player 2 input when checkbox is checked
    againstComputerCheckbox.addEventListener("change", function() {
        if (this.checked) {
            player2Input.value = "";
            player2Input.disabled = true;
        } else {
            player2Input.disabled = false;
        }
    });

    // Event listener to remove start screen and save input values
    startGameButton.addEventListener("click", function() {
        const player1Value = player1Input.value || "Player 1";
        const player2Value = player2Input.value || "Player 2";
        const againstComputer = againstComputerCheckbox.checked;

        startGame(player1Value, player2Value);
        
        console.log("Player 1:", player1Value);
        console.log("Player 2:", player2Value);
        console.log("Against Computer:", againstComputer);
        
        document.body.removeChild(startScreen);
    });
}

function startGame(player1Value, player2Value){
    createGameBoard(player1Value, player2Value);
}

function createSetUpScreen() {
    // Get the container element
    const body = document.querySelector("body");

    const container = document.createElement("div")
    container.id = "setup"
    body.appendChild(container)

    // Create the setup options div
    const setupOptions = document.createElement("div");
    setupOptions.id = "setupGameOptions";
    container.appendChild(setupOptions);

    // Create the game board div
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameboard");
    gameBoard.id = "setupGameGameboard";
    
    // Generate 81 boxes dynamically
    for (let i = 0; i < 81; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        gameBoard.appendChild(box);
    }

    // Append game board to the container
    container.appendChild(gameBoard);

    // Create and append the start button
    const startButton = document.createElement("button");
    startButton.classList.add("button-5", "setupButton");
    startButton.textContent = "Start!";
    container.appendChild(startButton);
}

// Creates two new game boards based on player names and removes the preivous boards if any
function createGameBoard(player1, player2) {

    const existingGame = document.getElementById("game");
    if (existingGame) {
        existingGame.remove();
    }

    const gameContainer = document.createElement("div");
    gameContainer.id = "game";

    function createPlayerBoard(playerName) {
        const playerDiv = document.createElement("div");
        playerDiv.id = playerName;

        const gameBoard = document.createElement("div");
        gameBoard.classList.add("gameboard");
        gameBoard.id = "setupGameGameboard";

        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.id = `${playerName}${x}${y}`;
                gameBoard.appendChild(box);
            }
        }

        playerDiv.appendChild(gameBoard);
        return playerDiv;
    }

    gameContainer.appendChild(createPlayerBoard(player1));
    gameContainer.appendChild(createPlayerBoard(player2));
    document.body.appendChild(gameContainer);
}

function placeShipOnDOM(gameboard, start, length, axis){

}

function initializeBoard(gameboard, gameboardDOM){

}

function updateBoard(x, y, newVal, gameboard){

}

function displayWinner(){

}

// Call the function to create and add the start screen to the page
// createStartScreen();
