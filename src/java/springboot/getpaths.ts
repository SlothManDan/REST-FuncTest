/* eslint-disable max-depth */
import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';
import { getPort } from './getport.js';

export function getPaths(){
    const javaFiles = getJavaFiles();

    const controllerFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('@RestController');
    });

    const paths: { [filePath: string]: { path: string, type: string }[] } = {};

    for (const file of controllerFiles){
        const fileContent = fs.readFileSync(file, 'utf8');
        const lines = fileContent.split('\n');
        const port = getPort();
        let url = `http://localhost:${port}`;

        for (const line of lines){
            const trimmedLine = line.trim();
            if (line.startsWith('@RequestMapping')){
                const path = trimmedLine.split('"')[1];
                url = `${url}${path}`;
            }
            else if (line.startsWith('public class')){
                if (!paths[file]){
                    paths[file] = [];
                }
            }
            else if (trimmedLine.startsWith('@GetMapping')){
                if (trimmedLine.includes('"')){
                    if (trimmedLine.includes('{')){
                        let path = trimmedLine.split('"')[1];
                        path = path.replaceAll(/{[^}]+}/g, '1');
                        paths[file].push({path: `${url}${path}`, type: 'GET'});
                    }else{
                        const path = trimmedLine.split('"')[1];
                        paths[file].push({path: `${url}${path}`, type: 'GET'});
                    }
                }else{
                    paths[file].push({path: url, type: 'GET'});
                }
            } else if (trimmedLine.startsWith('@PostMapping')){
                if (trimmedLine.includes('"')){
                    if (trimmedLine.includes('{')){
                        let path = trimmedLine.split('"')[1];
                        path = path.replaceAll(/{[^}]+}/g, '1');
                        paths[file].push({path: `${url}${path}`, type: 'POST'});
                    }else{
                        const path = trimmedLine.split('"')[1];
                        paths[file].push({path: `${url}${path}`, type: 'POST'});
                    }
                } else {                
                    paths[file].push({path: url, type: 'POST'});
                }
            } else if (trimmedLine.startsWith('@PutMapping')){
                if (trimmedLine.includes('"')){
                    if (trimmedLine.includes('{')){
                        let path = trimmedLine.split('"')[1];
                        path = path.replaceAll(/{[^}]+}/g, '1');
                        paths[file].push({path: `${url}${path}`, type: 'PUT'});
                    }else{
                        const path = trimmedLine.split('"')[1];
                        paths[file].push({path: `${url}${path}`, type: 'PUT'});
                    }
                } else {
                    paths[file].push({path: url, type: 'PUT'});
                }
            } else if (trimmedLine.startsWith('@DeleteMapping')){
                if (trimmedLine.includes('"')){
                    if (trimmedLine.includes('{')){
                        let path = trimmedLine.split('"')[1];
                        path = path.replaceAll(/{[^}]+}/g, '1');
                        paths[file].push({path: `${url}${path}`, type: 'DELETE'});
                    }else{
                        const path = trimmedLine.split('"')[1];
                        paths[file].push({path: `${url}${path}`, type: 'DELETE'});
                    }
                } else {
                    paths[file].push({path: url, type: 'DELETE'});
                }
            }
        }
    }

    return paths;
}