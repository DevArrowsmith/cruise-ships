const Ship = require("../src/Ship");

describe("Ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("is created with a specified 'currentPort' value", () => {
        expect(new Ship("Lisbon").currentPort).toBe("Lisbon");
    });
    it("can set sail", () => {
        const ship = new Ship("Lisbon");
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});