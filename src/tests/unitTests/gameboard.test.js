import { Gameboard } from "../../js/objects/gameboard"

test('Placing a ship', () => {
    let gameboard = new Gameboard()

    console.log(gameboard.placeShip([0,1], [0,3], 2));
})