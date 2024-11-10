import {inventory} from "../solutions/cars.js"
import {bmwAndAudiCars} from "../solutions/problem6.js";

const onlyBmwAndAudiCarList = bmwAndAudiCars(inventory);
console.log(JSON.stringify(onlyBmwAndAudiCarList));