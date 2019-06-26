const API_BASE = "https://i-enjoy-lamp.azurewebsites.net/api";

// define variables
let app = document.getElementById("app");
let goButton = document.getElementById("goButton");
let colorInput = document.getElementById("colorInput");
let pastColors = document.getElementById("pastColors");

const App = {
  async init() {
    // initialize signalR hub (websockets connection)
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(API_BASE)
      .build();

    // receives the "colorChanged" web socket event
    connection.on("colorChanged", hex => {
      console.log("color changed");
      this.addPastColor(hex);
    });

    // start the websocket connection
    await connection.start();

    goButton.addEventListener("click", async () => {
      const color = colorInput.value;
      this.setColor(color);
    });
  },

  async setColor(color) {
    await fetch(`${API_BASE}/setColor?color=${color}`);
  },

  addPastColor(color) {
    // add a color circle
    let circle = this.createColumn(color);
    pastColors.appendChild(circle);
    document.getElementById("bulb").style = `fill: #${color};`;
  },

  createColumn(color) {
    let column = document.createElement("div");
    column.className = "column is-one-third";

    let pastColor = document.createElement("div");
    pastColor.className = "pastColor";
    pastColor.style = `background-color: #${color}`;
    pastColor.addEventListener("click", () => {
      this.setColor(color);
    });

    column.appendChild(pastColor);

    return column;
  }
};

App.init();
