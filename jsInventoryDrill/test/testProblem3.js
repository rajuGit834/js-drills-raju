import {inventory} from "../solutions/cars.js"
import {sortingCarModels} from "../solutions/problem3.js";

const carModelList = sortingCarModels(inventory);
console.log(carModelList.sort());