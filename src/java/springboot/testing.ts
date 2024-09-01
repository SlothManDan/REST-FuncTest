/* eslint-disable max-depth */
import { getPaths } from "./getpaths.js";
import { linkModelsToPaths } from "./linkmodelstopaths.js";
import { modelsToData } from "./modelstodata.js";

export function testing(){
    console.log('Springboot Testing ...');

    const data = modelsToData();
    const linkedModels = linkModelsToPaths();
    const paths = getPaths();

    for (const key of Object.keys(linkedModels)){
        for (const { modelKey, pathKey } of linkedModels[key]){
            for (const key2 of Object.keys(paths)){
                if (key2 === pathKey){
                    for (const key3 of Object.keys(data)){
                        if (key3 === modelKey){
                            for (const { path, type } of paths[key2]){
                                console.log(`Testing ${path} with ${type} method`);
                                console.log(`Data: ${JSON.stringify(data[key3])}`);
                            }
                        }
                    }
                }

            }
        }
    }

    console.log('Springboot Testing Completed');
}