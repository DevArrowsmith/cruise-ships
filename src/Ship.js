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
        this.currentPortNumber += 1;
        this.currentPort = this.itineary.ports[this.currentPortNumber];
    };
};

module.exports = Ship;