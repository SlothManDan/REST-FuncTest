import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';

export function getPaths(){
    const javaFiles = getJavaFiles();

    const controllerFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('@RestController');
    });

    return controllerFiles;
}