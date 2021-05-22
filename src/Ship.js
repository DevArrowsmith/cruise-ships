function Ship (startingPort) {
    this.currentPort = startingPort;
};

Ship.prototype = {
    setSail () {
        this.currentPort = undefined;
    }
}

module.exports = Ship;