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
    it("can set sail when currentPort is not undefined", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    it("can dock at the next port in the itineary when 'currentPort' is undefined", () => {
        ship.currentPort = undefined;
        ship.dock();
        expect(ship.currentPort).toBe(ship.itineary.ports[1]);
    })
    it("returns an error when the 'dock' method is called and 'currentPort' is not undefined", () => {
        expect(ship.dock()).toBe(`The ship is already docked at ${ship.currentPort}. Please set sail before attempting to dock.`);
    })
});