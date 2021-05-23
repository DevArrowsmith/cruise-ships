class Ship {
    constructor(startingPort) {
        this.itineary = startingPort;
    };
    setSail () {
        this.currentPort = undefined;
    }
    dock(newPort) {
        this.currentPort = newPort;
    }
}

module.exports = Ship;