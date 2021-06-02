(function exportController() {
    class Controller {
        constructor (ship) {
            this.ship = ship;
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
        };
        initialiseSea() {
            const backgrounds = [
                "./assets/water1.png",
                "./assets/water0.png"
            ]
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url("${backgrounds[backgroundIndex % backgrounds.length]}")`;
                backgroundIndex += 1;
            }, 1000);
        };
        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';
            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;
                portsElement.appendChild(newPortElement);
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        };
        renderShip() {
            const shipPortIndex = this.ship.currentPortNumber;
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector("#ship");
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 38}px`;
        };
        renderMessage(message) {
            const newMessageElement = document.createElement("div");
            newMessageElement.id = "messagebox";
            newMessageElement.innerHTML = message;
            const viewportElement = document.querySelector("#viewport");
            viewportElement.appendChild(newMessageElement);
            const removeMessage = () => viewportElement.removeChild(document.querySelector("#messagebox"));
            setTimeout(removeMessage, 2000);
        };
        setSail() {
            const ship = this.ship;
            const nextPort = document.querySelector(`[data-port-index="${ship.currentPortNumber + 1}"]`);
            if(!nextPort) {
                return alert('End of the line!');
            };
            this.renderMessage(`Setting sail from ${ship.currentPort.name}.`)
            const shipElement = document.querySelector("#ship");
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPort.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    this.renderMessage(`Arrived at ${ship.currentPort.name}.`)
                    clearInterval(sailInterval);
                }
                shipElement.style.left = `${shipLeft + 1}px`;
            }, 20);
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());