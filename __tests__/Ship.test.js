const Ship = require("../src/Ship");

describe("Ship", () => {
    beforeEach(() => {
        ship = new Ship({
            ports: ["lisbon", "valencia"]
        });
    });
    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("is created with a specified object as the 'itineary' value", () => {
        expect(ship.itineary).toBeInstanceOf(Object);
    });
    it("has an initial 'currentPort' value equal to the value of the first element in the 'ports' array of the 'itineary' property", () => {
        expect(ship.currentPort).toBe(ship.itineary.ports[0]);
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