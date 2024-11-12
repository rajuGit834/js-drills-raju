import {inventory} from "../solutions/cars.js"
import {oldCars} from "../solutions/problem5.js";

const oldCarList = oldCars(inventory);
console.log(`There are ${oldCarList.length} old cars which is showing below :`);
console.log(oldCarList);