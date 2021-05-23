class Ship {
    constructor(itineary) {
        this.itineary = itineary;
    };
    setSail () {
        this.currentPort = undefined;
    }
    dock(newPort) {
        this.currentPort = newPort;
    }
}

module.exports = Ship;