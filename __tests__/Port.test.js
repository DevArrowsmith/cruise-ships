const Port = require("../src/Port");

const ship = jest.fn();

describe("Port", () => {

    let port;

    beforeEach(() => {
        port = new Port("Lisbon");
    });

    it("returns an object", () => {
        expect(port).toBeInstanceOf(Object);
    });
    it("is created with a specified 'name' value", () => {
        expect(port.name).toBe("Lisbon")
    })
    it("is created with a 'ships' value of an empty array", () => {
        expect(Array.isArray(port.ships)).toBe(true);
        expect(port.ships.length).toBe(0);
    })
    it("can add a ship to the 'ships' array", () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    })
    it("can remove a ship from the 'ships' array", () => {
        port.ships = [ship];
        port.removeShip(ship);
        expect(port.ships.length).toBe(0);
    })
});