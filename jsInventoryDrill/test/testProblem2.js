import {inventory} from "../solutions/cars.js"
import {lastCarOfInventory} from "../solutions/problem2.js";

const lastCar = lastCarOfInventory(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);


