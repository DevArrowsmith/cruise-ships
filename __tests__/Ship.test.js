const Ship = require("../src/Ship");

describe("Ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
});