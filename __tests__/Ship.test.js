const Ship = require("../src/Ship");

describe("Ship", () => {
    const port1 = { 
        name: "Lisbon",
        addShip: jest.fn(),
        removeShip: jest.fn()
    };
    const port2 = {
        name: "Valencia",
        addShip: jest.fn()
    };
    const itineary = {
        ports: [port1, port2]
    };

    let ship;

    beforeEach(() => {
        ship = new Ship(itineary);
    });
    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it("is created with a specified object as the value of the itineary parameter", () => {
        expect(ship.itineary).toBe(itineary);
    });
    it("has an initial currentPort value equal to the first port object element in the itineary", () => {
        expect(ship.currentPort).toBe(ship.itineary.ports[0]);
    });
    it("is added to the first port on instantiation", () => {
        expect(port1.addShip).toBeCalledWith(ship);
    });
    describe("setSail", () => {
        beforeEach(() => {
            ship.setSail();
        });       
        it("can set sail when currentPort is not undefined", () => {
            expect(ship.currentPort).toBeFalsy();
        });
        it("is removed from the currentPort when it sets sail", () => {
            expect(port1.removeShip).toBeCalledWith(ship);
        });
    });
    it("returns an error when the setSail method is called and currentPort is undefined", () => {
        ship.currentPort = undefined;
        expect(ship.setSail()).toBe("The ship is already at sea. Please dock before attempting to set sail.");
    });
    it("returns an error when the setSail method is called and every port in the itineary has been visited", () => {
        ship.currentPortNumber = 1;
        expect(ship.setSail()).toBe("The ship has reached its final destination and cannot currently set sail.");
    });
    describe("dock", () => {
        beforeEach(() => {
            ship.currentPort = undefined;
            ship.dock();
        });
        it("can dock at the next port in the itineary when currentPort is undefined", () => {
            expect(ship.currentPort).toBe(ship.itineary.ports[1]);
        });
        it("is added to the new currentPort when it docks", () => {
            expect(port2.addShip).toBeCalledWith(ship);
        });
    });
    it("returns an error when the dock method is called and currentPort is not undefined", () => {
        expect(ship.dock()).toBe(`The ship is already docked at Lisbon. Please set sail before attempting to dock.`);
    })
});