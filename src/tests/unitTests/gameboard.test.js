import { Gameboard } from "../../js/objects/gameboard"

describe('Gameboard Ship Placement', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard(); // Initialize a fresh gameboard before each test
    });

    test('should not place ship out of bounds horizontally', () => {
        const result = gameboard.placeShip([0, 1], 11, 'x');
        expect(result).toBe("Invalid - Ship Out of Bounds");
    });

    test('should not place ship out of bounds vertically', () => {
        const result = gameboard.placeShip([0, 8], 1, 'y');
        expect(result).toBe("Invalid - Ship Out of Bounds");
    });

    test('should place ship successfully within bounds horizontally', () => {
        const result = gameboard.placeShip([0, 1], 2, 'x');
        expect(result).toBe("Ship placed successfully");

        // Check if the ship occupies the correct horizontal cells
        for(let i = 0; i < 3; i++) expect(gameboard.gameboardArr[i][1]).toBe(1)
    });

    test('should place ship successfully within bounds vertically', () => {
        const result = gameboard.placeShip([0, 1], 5, 'y');
        expect(result).toBe("Ship placed successfully");

        // Check if the ship occupies the correct vertical cells
        for(let i = 1; i < 7; i++) expect(gameboard.gameboardArr[0][i]).toBe(1)
    });

    test('should properly number ships on the board', () => {
        gameboard.placeShip([0,1], 2, 'x')
        gameboard.placeShip([0,1], 5, 'y')

        // Check if the second ship is labels as 2 on the board
        for(let i = 1; i < 7; i++) expect(gameboard.gameboardArr[0][i]).toBe(2)
    })

    test('should properly track all ships in a ships array', () => {
        gameboard.placeShip([0,1], 2, 'x')
        gameboard.placeShip([0,1], 5, 'y')

        expect(gameboard.ships).toEqual([
            {
                ship: { length: 2, numOfHits: 0, sunk: false },
                pos: [0, 1],
                axis: 'x'
            },
            {
                ship: { length: 5, numOfHits: 0, sunk: false },
                pos: [0, 1],
                axis: 'y'
            }
        ]);        
    })
});