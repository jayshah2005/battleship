export class Ship{
    constructor(length){
        this.length = length;
        this.numOfHits = 0;
        this.sunk = false;
    }

    hit() {
        this.numOfHits++;
        return this.numOfHits;
    }

    isSunk() {
        if(this.numOfHits >= this.length) this.sunk = true

        return this.sunk
    }
}