import { linkModelsToPaths } from "./linkmodelstopaths.js";
import { modelsToData } from "./modelstodata.js";

export function testing(){
    console.log('Springboot Testing ...');

    const data = modelsToData();
    const linkedModels = linkModelsToPaths();

    console.log(data);
    console.log("--------------------");
    console.log(linkedModels);

    console.log('Springboot Testing Completed');
}