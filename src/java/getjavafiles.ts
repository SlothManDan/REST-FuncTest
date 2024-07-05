import fs from 'node:fs';
import path from 'node:path';

export function getJavaFiles() {
    const currentDirectory = process.cwd();;
    const javaFiles: string[] = [];

    function findJavaFiles(directory: string) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                findJavaFiles(fullPath);
            } else if (file.endsWith('.java')) {
                javaFiles.push(fullPath);
            }
        }
    }

    const javaDirectory = path.resolve(currentDirectory, 'src/main/java');
    findJavaFiles(javaDirectory);

    return javaFiles;
}