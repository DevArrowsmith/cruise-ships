const Ship = require("../src/Ship");

describe("Ship", () => {
    beforeEach(() => {
        ship = new Ship({});
    });
    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("is created with a specified object as the 'itineary' value", () => {
        expect(ship.itineary).toBeInstanceOf(Object);
    });
    it("can set sail", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    it("can dock at a new port", () => {
        ship.currentPort = undefined;
        expect(ship.currentPort).toBeFalsy();
        ship.dock({});
        expect(ship.currentPort).toBeInstanceOf(Object);
    })
});