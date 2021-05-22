class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort;
    };
    setSail () {
        this.currentPort = undefined;
    }
    dock(newPort) {
        this.currentPort = newPort;
    }
}

module.exports = Ship;