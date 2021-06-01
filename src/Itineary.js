(function exportItineary() {
    class Itineary {
        constructor () {
            this.ports = [...arguments];
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Itineary;
    } else {
        window.Itineary = Itineary;
    };
}());