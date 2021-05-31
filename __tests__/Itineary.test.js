const Itineary = require("../src/Itineary");

describe("Itineary", () => {

    let itineary;
    
    beforeEach(() => {
        itineary = new Itineary(jest.fn(), jest.fn());
    });
    it("returns an object", () => {
        expect(itineary).toBeInstanceOf(Object);
    });
    it("has a 'ports' property containing an array of all arguments", () => {
        expect(Array.isArray(itineary.ports)).toBe(true);
        expect(itineary.ports.length).toBe(2);
    });
});