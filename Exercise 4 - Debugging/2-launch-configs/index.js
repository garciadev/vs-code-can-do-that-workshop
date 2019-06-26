"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const API_BASE = "https://i-enjoy-lamp.azurewebsites.net/api";
const axios_1 = require("axios");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
function setColor(color) {
    axios_1.default
        .get(`${API_BASE}/setColor?color=${color}`)
        .then(() => {
        console.log(`The lamp color is now: ${color}`);
    })
        .catch(err => {
        console.log(err.message);
    });
}
readline.question("Enter a color: ", (color) => __awaiter(this, void 0, void 0, function* () {
    yield setColor(color);
    readline.close();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxRQUFRLEdBQUcsNENBQTRDLENBQUM7QUFDOUQsaUNBQTBCO0FBRTFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDbkQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN2QixDQUFDLENBQUM7QUFFSCxrQkFBa0IsS0FBSztJQUNyQixlQUFLO1NBQ0YsR0FBRyxDQUFDLEdBQUcsUUFBUSxtQkFBbUIsS0FBSyxFQUFFLENBQUM7U0FDMUMsSUFBSSxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsR0FBRztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBTSxLQUFLO0lBQzlDLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=