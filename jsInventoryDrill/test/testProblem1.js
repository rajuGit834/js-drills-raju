import {inventory} from "../solutions/cars.js"
import {carDetailsOfId33} from "../solutions/problem1.js";

const carDetails = carDetailsOfId33(inventory);
console.log(`Car 33 is a ${carDetails.car_year}  ${carDetails.car_make} ${carDetails.car_model}`);