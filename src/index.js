import './style.css';
import './startScreen.css';
import './setup.css'
import { Player } from "./js/objects/player.js"
import logoPath from "./assets/battleship_img_logo.png";
import { Gameboard } from './js/objects/gameboard.js';

let player1;
let player2;
let movePlayed = false; // Tracks if the current player made a valid move
let currPlayer; // Tracks the current player
let againstComputer = true; // Tracks if the game is against a computer

startGame("player 1", "player 2")

function startNewGame(){
    player1 = new Player()
    player2 = new Player();
}

/**
 * Initializes a new game by setting up all the variables and the DOM
 * @param {String} player1Value Name of player 1
 * @param {String} player2Value Name of Player 2
 */
function startGame(player1Value, player2Value){

    createGameBoard(player1Value, player2Value);

    player1 = {
        name: player1Value,
        board: new Gameboard(),
        boardDiv: document.getElementById(player1Value)
    }

    player2 = {
        name: player2Value,
        board: new Gameboard(),
        boardDiv: document.getElementById(player2Value)
    }

    currPlayer = player1;

    initializeBoard(player1)
    initializeBoard(player2)
    updateCurrentPlayerText(currPlayer)

    player1.boardDiv.addEventListener("click", () => {
        if(movePlayed){
            movePlayed = false
            currPlayer = player1
            updateCurrentPlayerText(currPlayer)
        }
    })

    player2.boardDiv.addEventListener("click", () => {
        if(movePlayed){
            movePlayed = false
            currPlayer = player2
            updateCurrentPlayerText(currPlayer)
            if(againstComputer){
                setTimeout(() => makeMoveAgainst(player1), 100);
            }
        }
    })
}

function makeMoveAgainst(player){
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);

    while(!player.board.validataAttack(x, y)){
        x = Math.floor(Math.random() * 9);
        y = Math.floor(Math.random() * 9);
    }

    console.log(player);
    document.getElementById(player.name + x + y).click()
}

function updateCurrentPlayerText(currPlayer){
    if(document.getElementById("currPlayer") != null){
        let div = document.querySelector("#currPlayer")
        div.innerHTML = currPlayer.name +"'s turn"
    } else {
        let game = document.querySelector("#game")
        let div = document.createElement("div")
        div.id = "currPlayer"
        div.innerHTML = currPlayer.name +"'s turn"

        game.appendChild(div)
    }
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
        let player1Value = player1Input.value || "Player 1";
        let player2Value = player2Input.value || "Player 2";
        againstComputer = againstComputerCheckbox.checked;

        if(againstComputer) player2Value = "Luffy"

        startGame(player1Value, player2Value);
        
        console.log("Player 1:", player1Value);
        console.log("Player 2:", player2Value);
        console.log("Against Computer:", againstComputer);
        
        document.body.removeChild(startScreen);
    });
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
function createGameBoard(player1Name, player2Name) {

    const existingGame = document.getElementById("game");
    if (existingGame) {
        existingGame.remove();
    }

    const gameContainer = document.createElement("div");
    gameContainer.id = "game";

    function createPlayerBoard(playerName) {
        const playerDiv = document.createElement("div");
        playerDiv.id = playerName;

        const playerNameDiv = document.createElement("div");
        playerNameDiv.classList.add("playerName");
        playerNameDiv.textContent = playerName;

        const gameBoard = document.createElement("div");
        gameBoard.classList.add("gameboard");
        gameBoard.id = "setupGameGameboard";

        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.id = `${playerName}${x}${y}`;

                box.addEventListener("click", () => {

                    let playerAttacked = getPlayerNameFromId(box.id)

                    if(playerAttacked == currPlayer) {
                        alert("You can not attack your own board")
                        return
                    }

                    let {x, y} = getArrayElemFromId(box.id);
                    let hit = playerAttacked.board.receiveAttack(x, y)

                    if(hit != "Invalid Attack") {

                        if(hit) {
                            box.classList = "box clicked hit"

                            if(playerAttacked.board.boardStatus) {
                                console.log("Test");
                                
                            }

                        } else{
                            box.classList = "box clicked";
                        }
                        movePlayed = true
                    }
                    else {
                        alert("Please select a valid move!")
                    }
                })

                gameBoard.appendChild(box);
            }
        }

        playerDiv.appendChild(playerNameDiv)
        playerDiv.appendChild(gameBoard);
        return playerDiv;
    }

    gameContainer.appendChild(createPlayerBoard(player1Name));
    gameContainer.appendChild(createPlayerBoard(player2Name));
    document.body.appendChild(gameContainer);
}

// Gets the corresponding coordinates on the gameborad based on the DOM grid box
function getArrayElemFromId(id){
    return {
        x: id.slice(-2, -1),
        y: id.slice(-1)
    }
}

// Gets the player name the DOM grid box belongs to
function getPlayerNameFromId(id){
    return id.slice(0, -2) == player1.name ? player1 : player2
}

function placeShipOnDOM(gameboard, start, length, axis){

}

function initializeBoard(player){

    let start;
    let length;
    let axis;
    let returnVal;

    for(let i = 4; i < 8; i++){
        while(returnVal != "Ship placed successfully"){
            length = i;
            axis = Math.floor(Math.random() *2) == 0 ? "x" : "y";
            start = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]

            returnVal = player.board.placeShip(start, length, axis);
        }   

        returnVal = "";
    }    
}

function updateBoard(x, y, newVal, gameboard){

}

function displayWinner(){

}