import { testObject } from "../solutions/objects.js";
import { defaults } from "../solutions/defaults.js";

const defaultProps = {
    "name" : "Raju",
    "last_name" : "kumar"
}

console.log(defaults(testObject, defaultProps));