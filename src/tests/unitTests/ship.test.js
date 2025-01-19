import { Ship } from "../../js/objects/ship";

test('Ship getting hit', () => {

    let ship = new Ship(4);

    expect(ship.hit()).toBe(1)
    expect(ship.hit()).toBe(2)
})

test('Test if the ship is sunk or not', () => {

    let ship = new Ship(1);

    expect(ship.isSunk()).toBe(false)

    ship.hit()

    expect(ship.isSunk()).toBe(true)
})