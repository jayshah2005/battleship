export class Gameboard{

    arr;

    constructor(){
        this.#initalizeBoard();
    }

    /**
     * 
     * @param {arr} start The array of coordinates where we start
     * @param {arr} end The array of coordinates where we end
     * @param {int} length The length of the ship
     * @returns true if the given coordinates are valid
     */
    #coordinatesValidator(start, end, length){

        start.forEach(elem => {
            if(elem > 9) return false
        })

        end.forEach(elem => {
            if(elem > 9) return false
        })

        // Checks if two array are the same
        if(start[0] == end[0] && end[1] == start[1]) return false

        // Checks that atleast one of the coordinates is the same
        if(start[0] != end[0] && end[1] != start[1]) return false
        
        // Checks to make sure that the ship will fit in the given space
        if(Math.abs(start[0] - end[0] + start[1] - end[1]) != length) return false

        return true
    }

    /**
     * The function places a ship of given length between start and end points
     * @param {arr} start The x and y coordinates of the starting point
     * @param {arr} end The x and y coordinated of the end point
     * @param {int} length The length of the ship to be placed
     */
    placeShip(start, end, length){

        if(!this.#coordinatesValidator(start, end, length)) return 'invalid'

    }

    /**
     * Create a 10x10 array which will act as the Gameboard
     */
    #initalizeBoard(){
        this.arr = []

        for (let i = 0; i < 10; i++) {
            const row = []; // Create a new row
            for (let j = 0; j < 10; j++) {
                row.push(0)
            }
            this.arr.push(row); // Add the row to the 2D array
        }
    }
}