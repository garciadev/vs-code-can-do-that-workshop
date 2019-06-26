const API_BASE = "https://i-enjoy-lamp.azurewebsites.net/api";
import axios from "axios";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function setColor(color) {
  axios
    .get(`${API_BASE}/setColor?color=${color}`)
    .then(() => {
      console.log(`The lamp color is now: ${color}`);
    })
    .catch(err => {
      console.log(err.message);
    });
}

readline.question("Enter a color: ", async color => {
  await setColor(color);
  readline.close();
});
