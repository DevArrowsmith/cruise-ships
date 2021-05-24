const Itineary = require("../src/Itineary");

describe("Itineary", () => {
    it("returns an object", () => {
        expect(new Itineary()).toBeInstanceOf(Object);
    });
    it("has a 'ports' property containing an array of all arguments", () => {
        const port1 = { 
            name: "Lisbon"
        };
        const port2 = {
            name: "Valencia"
        };
        itineary = new Itineary(port1, port2);
        expect(itineary).toEqual({
            ports: [{name: "Lisbon"}, {name: "Valencia"}]
        });
    });
});