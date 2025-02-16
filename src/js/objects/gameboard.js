import { Ship } from "./ship";

export class Gameboard{

    
    ships;  // An gameboardArray of objects which contain ships, their starting location and it'a axis
    boardStatus; // Report whether or not all of their ships have been sunk.
    static GAMEBOARD_LENGTH = 9;
    
    /**
     * An 2D array that keeps track of the gameboard. arr[x][y]
     * -2 means nothing is placed on that cell and it has been hit
     * -1 means nothing is placed on that cell
     * 0 means a ship did occupy that space but it was hit there
     * 1-n means a ship is currently occuping that space
    */
    gameboardArr;  

    constructor(){
        this.#initalizeBoard();
        this.ships = [];
        this.boardStatus = false;
    }

    receiveAttack(x, y){

        let val = this.gameboardArr[x][y] 
        let validAttack = this.validataAttack(x, y)     

        if(!validAttack) return "Invalid Attack"

        if(val == -1) {
            this.gameboardArr[x][y] = -2
            return false
        } else {
            
            this.ships[this.gameboardArr[x][y] - 1].ship.hit()

            this.#updateBoardStatus()

            this.gameboardArr[x][y] = 0;
            return true;
        }

    }

    #updateBoardStatus(){        
        this.boardStatus = this.ships.reduce((acc, curr) => acc && curr.ship.isSunk(), true)
    }

    validataAttack(x, y){   
        
        let val = this.gameboardArr[x][y]
        
        if(val == -1 || val > 0) return true
        else return false;
        
    }

    /**
     * Checks if given coordinates are valid for ship of a given length
     * @param {gameboardArr} start The gameboardArray of x and y coordinates where we start
     * @param {gameboardArr} end The gameboardArray of x and y coordinates where we end
     * @returns true if the given coordinates are valid
     */
    #coordinatesValidator(start, end){

        // Checks if all coordinates are within the range of valid coordinates
        if (
            start.some(elem => elem >= Gameboard.GAMEBOARD_LENGTH || elem < 0) || 
            end.some(elem => elem >= Gameboard.GAMEBOARD_LENGTH || elem < 0)
        ) return false;    

        return true
    }

    #collisionChecker(start, length, axis){

        let check = false;
        let x = start[0], y = start[1]

        quit:
        while (true) {
            
            if (axis === 'x') {
                if (x - start[0] === length) break quit;
                check = this.gameboardArr[x][y] > 0 ? true : false;
                x++;
            } else {
                if (y - start[1] === length) break quit;
                check = this.gameboardArr[x][y] > 0 ? true : false;                
                y++;
            }            
        }

        return check;
    }

    /**
     * The function places a ship of given length between start and end points
     * @param {gameboardArr} start The gameboardArray of x and y coordinates where we start
     * @param {gameboardArr} end The gameboardArray of x and y coordinates where we end
     * @param {int} length The length of the ship to be placed
     */
    placeShip(start, length, axis){

        let end;

        if(axis == 'x') end = [start[0] + length, start[1]]
        else end = [start[0], start[1] + length]

        if(!this.#coordinatesValidator(start, end)) return 'Invalid - Ship Out of Bounds'
        if(this.#collisionChecker(start, length, axis)) return "Invalid - Ship leads a collision"
 
        let ship = new Ship(length);

        this.ships.push({
            ship: ship,
            pos: start,
            axis: axis
        })        

        let x = start[0], y = start[1]

        quit:
        while (true) {
            
            if (axis === 'x') {
                if (x - start[0] === length) break quit;
                this.gameboardArr[x][y] = this.ships.length;
                x++;
            } else {
                if (y - start[1] === length) break quit;
                this.gameboardArr[x][y] = this.ships.length;
                y++;

            }            
        }

        return "Ship placed successfully"
    }

    /**
     * Create a 10x10 gameboardArray which will act as the Gameboard
     */
    #initalizeBoard(){
        this.gameboardArr = []

        for (let i = 0; i < 10; i++) {
            const row = []; // Create a new row
            for (let j = 0; j < 9; j++) {
                row.push(-1)
            }
            this.gameboardArr.push(row); // Add the row to the 2D gameboardArray
        }
    }
}