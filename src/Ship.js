const INITIAL_PORT_NUMBER = 0;

class Ship {
    constructor(itineary) {
        this.itineary = itineary;
        this.currentPortNumber = INITIAL_PORT_NUMBER;
        this.currentPort = this.itineary.ports[this.currentPortNumber];
    };
    setSail () {
        this.currentPort = undefined;
    };
    dock() {
        if(this.currentPort !== undefined) {
            return `The ship is already docked at ${this.currentPort}. Please set sail before attempting to dock.`;
        };
        this.currentPortNumber += 1;
        this.currentPort = this.itineary.ports[this.currentPortNumber];
    };
};

module.exports = Ship;