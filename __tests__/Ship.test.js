const Ship = require("../src/Ship");

describe("Ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a specified 'startingPort' value", () => {
        expect(new Ship("Lisbon").startingPort).toBe("Lisbon");
    });
});