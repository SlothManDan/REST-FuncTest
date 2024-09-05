/* eslint-disable no-await-in-loop */
/* eslint-disable max-depth */
import { deleteTester } from "../../tester/deletetester.js";
import { getTester } from "../../tester/gettester.js";
import { postTester } from "../../tester/posttester.js";
import { putTester } from "../../tester/puttester.js";
import { getPaths } from "./getpaths.js";
import { linkModelsToPaths } from "./linkmodelstopaths.js";
import { modelsToData } from "./modelstodata.js";

export async function testing(){
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
                                switch (type) {
                                    case 'GET':{
                                        await getTester(path).then(result => {
                                            console.log(result);
                                        });
                                        break;
                                    }

                                    case 'POST': {
                                        await postTester(path, dataFormat(data[key3])).then(result => {
                                            console.log(result);
                                        });
                                        break;
                                    }

                                    case 'PUT': {
                                        await putTester(path, dataFormat(data[key3])).then(result => {
                                            console.log(result);
                                        });
                                        break;
                                    }

                                    case 'DELETE': {
                                        await deleteTester(path).then(result => {
                                            console.log(result);
                                        });
                                        break;
                                    }

                                    default: {
                                        console.log('Unknown method');
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    console.log('Springboot Testing Completed');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dataFormat(data: { name: string, value: any }[]): { [key: string]: any } {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedData: { [key: string]: any } = {};
    for (const { name, value } of data) {
        formattedData[name] = value;
    }

    return formattedData;
}