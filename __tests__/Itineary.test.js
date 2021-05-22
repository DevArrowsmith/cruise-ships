const Itineary = require("../src/Itineary");

describe("Itineary", () => {
    it("returns an object", () => {
        expect(new Itineary()).toBeInstanceOf(Object);
    });
});