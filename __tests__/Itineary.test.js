const Itineary = require("../src/Itineary");

describe("Itineary", () => {
    it("returns an object", () => {
        expect(new Itineary()).toBeInstanceOf(Object);
    });
    it("has a 'ports' property containing an array of all arguments", () => {
        const itineary = new Itineary(jest.fn(), jest.fn());
        expect(Array.isArray(itineary.ports)).toBe(true);
        expect(itineary.ports.length).toBe(2);
    });
});