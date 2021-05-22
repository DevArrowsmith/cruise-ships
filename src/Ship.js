function Ship (startingPort) {
    this.startingPort = startingPort;
};

Ship.prototype = {
    setSail () {
        this.startingPort = undefined;
    }
}

module.exports = Ship;