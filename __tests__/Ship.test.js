const Ship = require("../src/Ship");

describe("Ship", () => {
    beforeEach(() => {
        ship = new Ship({});
    });
    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("is created with a specified object as the 'currentPort' value", () => {
        expect(ship.currentPort).toBeInstanceOf(Object);
    });
    it("can set sail", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});