class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort;
    };
    setSail () {
        this.currentPort = undefined;
    }
}

module.exports = Ship;