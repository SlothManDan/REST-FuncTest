import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';
import { getPort } from './getport.js';

export function getPaths(){
    const javaFiles = getJavaFiles();

    const controllerFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('@RestController');
    });

    const paths: { [controllerName: string]: { path: string, type: string }[] } = {};

    for (const file of controllerFiles){
        const fileContent = fs.readFileSync(file, 'utf8');
        const lines = fileContent.split('\n');
        const port = getPort();
        let controllerName = '';
        let url = `http://localhost:${port}`;

        for (const line of lines){
            const trimmedLine = line.trim();
            if (line.startsWith('@RequestMapping')){
                const path = trimmedLine.split('"')[1];
                url = `${url}${path}`;
            }
            else if (line.startsWith('public class')){
                controllerName = line.split(' ')[2];
                if (!paths[controllerName]){
                    paths[controllerName] = [];
                }
            }
            else if (trimmedLine.startsWith('@GetMapping')){
                if (trimmedLine.includes('"')){
                    const path = trimmedLine.split('"')[1];
                    paths[controllerName].push({path: `${url}${path}`, type: 'GET'});
                }else{
                    paths[controllerName].push({path: url, type: 'GET'});
                }
            } else if (trimmedLine.startsWith('@PostMapping')){
                if (trimmedLine.includes('"')){
                    const path = trimmedLine.split('"')[1];
                    paths[controllerName].push({path: `${url}${path}`, type: 'POST'});
                } else {                
                    paths[controllerName].push({path: url, type: 'POST'});
                }
            } else if (trimmedLine.startsWith('@PutMapping')){
                if (trimmedLine.includes('"')){
                    const path = trimmedLine.split('"')[1];
                    paths[controllerName].push({path: `${url}${path}`, type: 'PUT'});
                } else {
                    paths[controllerName].push({path: url, type: 'PUT'});
                }
            } else if (trimmedLine.startsWith('@DeleteMapping')){
                if (trimmedLine.includes('"')){
                    const path = trimmedLine.split('"')[1];
                    paths[controllerName].push({path: `${url}${path}`, type: 'DELETE'});
                } else {
                    paths[controllerName].push({path: url, type: 'DELETE'});
                }
            }
        }
    }

    return paths;
}