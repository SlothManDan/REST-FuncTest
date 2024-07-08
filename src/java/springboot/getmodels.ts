import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';

export function getModels() {
    const javaFiles = getJavaFiles();

    const entityFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('@Entity');
    });

    return entityFiles;
}