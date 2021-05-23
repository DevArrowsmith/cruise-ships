class Ship {
    constructor(itineary) {
        this.itineary = itineary;
        this.currentPort = this.itineary.ports[0];
    };
    setSail () {
        this.currentPort = undefined;
    }
    dock(newPort) {
        this.currentPort = newPort;
    }
}

module.exports = Ship;