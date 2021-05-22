const Ship = require("../src/Ship");

describe("Ship", () => {
    beforeEach(() => {
        ship = new Ship("Lisbon");
    });
    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("is created with a specified 'currentPort' value", () => {
        expect(ship.currentPort).toBe("Lisbon");
    });
    it("can set sail", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});