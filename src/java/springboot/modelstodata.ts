import { getModels } from "./getmodels.js";

export function modelsToData(){
    const models = getModels();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: { [key: string]: { name: string, value: any }[] } = {};

    for (const key of Object.keys(models)){
        const fileName = key.split(':')[0];
        for (const { name: modelName, type } of models[key]){
            if (!data[fileName]){
                data[fileName] = [];
            }

            data[fileName].push({ name: modelName, value: giveVarableData(type) });
        }
    }

    return data;
}

function giveVarableData(type: string) {
    return type === 'String' ? 'string' :
           type === 'int' || type === 'Integer' ? 1 :
           type === 'double' || type === 'Double' ? 1.1 :
           null;
}