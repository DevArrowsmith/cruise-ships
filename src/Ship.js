const INITIAL_PORT_NUMBER = 0;

class Ship {
    constructor(itineary) {
        this.itineary = itineary;
        this.currentPortNumber = INITIAL_PORT_NUMBER;
        this.currentPort = this.itineary.ports[this.currentPortNumber];
        this.currentPort.addShip(this);
    };
    setSail() {
        if(this.currentPort === undefined) {
            return "The ship is already at sea. Please dock before attempting to set sail.";
        };
        if(this.currentPortNumber === this.itineary.ports.length - 1) {
            return "The ship has reached its final destination and cannot currently set sail.";
        };
        this.currentPort.removeShip(this);
        this.currentPort = undefined;
    };
    dock() {
        if(this.currentPort !== undefined) {
            return `The ship is already docked at ${this.currentPort.name}. Please set sail before attempting to dock.`;
        };
        this.currentPortNumber += 1;
        this.currentPort = this.itineary.ports[this.currentPortNumber];
        this.currentPort.addShip(this);
    };
};

module.exports = Ship;