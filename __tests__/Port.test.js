const Port = require("../src/Port");

describe("Port", () => {
    it("returns an object", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it("is created with a specified 'name' value", () => {
        expect(new Port("Lisbon").name).toBe("Lisbon")
    })
});