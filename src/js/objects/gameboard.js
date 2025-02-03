import { Ship } from "./ship";

export class Gameboard{

    
    ships;  // An gameboardArray of objects which contain ships, their starting location and it'a axis
    static GAMEBOARD_LENGTH = 9;
    gameboardArr;  // An 2D array that keeps track of the gameboard. arr[x][y]

    constructor(){
        this.#initalizeBoard();
        this.ships = [];
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
        
        let ship = new Ship(length);

        this.ships.push({
            ship: ship,
            pos: start,
            axis: axis
        })        

        let x = start[0], y = start[1]

        quit:
        while (true) {
            

            this.gameboardArr[x][y] = this.ships.length;

            if (axis === 'x') {
                if (x - start[0] === length) break quit;
                x++;
            } else {
                if (y - start[1] === length) break quit;
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
            for (let j = 0; j < 10; j++) {
                row.push(0)
            }
            this.gameboardArr.push(row); // Add the row to the 2D gameboardArray
        }
    }
}