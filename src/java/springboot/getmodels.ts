import fs from 'node:fs';

import { getJavaFiles } from '../getjavafiles.js';

export function getModels() {
    const javaFiles = getJavaFiles();

    const entityFiles = javaFiles.filter((file) => {
        const fileContent = fs.readFileSync(file, 'utf8');
        return fileContent.includes('@Entity');
    });

    const models: { [className: string]: { name: string, type: string }[] } = {};

    for (const file of entityFiles) {
        const fileContent = fs.readFileSync(file, 'utf8');
        const lines = fileContent.split('\n');
        let className = '';
        let ignoreVariable = false;
        let previousLine = '';

        for (const line of lines) {
            if (line.startsWith('public class')) {
                className = line.split(' ')[2];
            } else if (previousLine.startsWith('@GeneratedValue')) {
                ignoreVariable = true;
            } else if (line.startsWith('private') && !ignoreVariable) {
                const type = line.split(' ')[1];
                const name = line.split(' ')[2];

                models[className].push({ name, type });
            }

            ignoreVariable = false;
            previousLine = line;
        }
    }

    return models;
}