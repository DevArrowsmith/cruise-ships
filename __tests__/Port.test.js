const Port = require("../src/Port");
describe("Port", () => {
    it("returns an object", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});