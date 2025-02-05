import { Player } from "../../js/objects/player";

test('Player should have its gameboard', () => {

    let player = new Player();    

    expect(player.gameboard).toBeDefined();

});