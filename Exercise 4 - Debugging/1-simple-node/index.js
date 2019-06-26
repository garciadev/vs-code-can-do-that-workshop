const axios = require("axios");
const API_BASE = "https://i-enjoy-lamp.azurewebsites.net/api";

const App = {
  /**
   * Initalize the page and websocket connection
   */
  init() {
    let result = axios
      .get(`${API_BASE}/setColor?color=1e1e1e`).then(data => console.log(data));
  }
};

App.init();
