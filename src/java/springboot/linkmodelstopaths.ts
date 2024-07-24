/* eslint-disable max-depth */
import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';
import { getModels } from "./getmodels.js";
// import { getPaths } from "./getpaths.js";

export function linkModelsToPaths(){
    const models: { [key: string]: { name: string; type: string; }[]; } = getModels();
    // const paths: { [filePath: string]: { path: string, type: string }[] } = getPaths();

    const linkedModels: { [modelName: string]: {modelKey: string, pathKey: string}[] } = {};

    const javaFiles = getJavaFiles();

    const repositoryFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('extends JpaRepository');
    });
    
    for (const file of repositoryFiles){
        const fileContent = fs.readFileSync(file, 'utf8');
        const lines = fileContent.split('\n');
        for (const line of lines){
            if (line.startsWith('public interface')){
                const regex = /public interface (\w+) extends JpaRepository<(\w+),/;
                const match = line.match(regex);
                if (match){
                    const repositoryName = match[1];
                    const modelName = match[2]; 
                    for (const key of Object.keys(models)) {
                        const path = key.split(':')[0];
                        const className = key.split(':')[1];
                        if (className === modelName){
                            const indexToRemove = javaFiles.indexOf(file);
                            const filesToSearch = javaFiles.splice(indexToRemove, 1);

                            const firstSearch = filesToSearch.filter((file) => {
                                const fileContent = fs.readFileSync(file, 'utf8');
                                return fileContent.includes(`${repositoryName}`);
                            });

                            for (const file2 of firstSearch){
                                if (!linkedModels[modelName]){
                                    linkedModels[modelName] = [];
                                    
                                }

                                linkedModels[modelName].push({modelKey: path, pathKey: file2});
                            }
                        }
                    }
                }
            }
        }
    }

    return linkedModels;
}