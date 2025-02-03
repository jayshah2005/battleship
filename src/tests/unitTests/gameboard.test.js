import { Gameboard } from "../../js/objects/gameboard"


/**
    * -1 means nothing is placed on that cell
    * 0 means a ship did occupy that space but it was hit there
    * 1 means a ship is currently occuping that space
 */
describe('Gameboard Recieve Attack', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();

        gameboard.placeShip([0,1], 2, 'x')
        gameboard.placeShip([0,1], 5, 'y')
    });

    describe('Determine whether or not the attack hit a ship', () => {
        test("should determines if the attack hit the ship", () => {
            expect(gameboard.receiveAttack(0,3)).toBe(true)
        })

        test("should determines if the attack did not hit the ship", () => {
            expect(gameboard.receiveAttack(1,8)).toBe(false)
        })
    });

    test("should record hits for the correct ship", () => {
        gameboard.receiveAttack(0,3)        

        expect(gameboard.ships[0].ship.numOfHits).toBe(1)
    })

    test("should record the coordinates of all missed shots", () => {
        gameboard.receiveAttack(1,8)        

        expect(gameboard.gameboardArr[1][8]).toBe(0)
    })
});

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