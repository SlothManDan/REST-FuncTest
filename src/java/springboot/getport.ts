import fs from 'node:fs';
import path from 'node:path';

export function getPort() {
    const currentDirectory = process.cwd();
    const applicationPropertiesPath = path.resolve(currentDirectory, 'src/main/resources/application.properties');

    const defaultPort = 8080;

    const data = fs.readFileSync(applicationPropertiesPath, 'utf8');
    const lines = data.split('\n');

    for (const line of lines) {
        if (line.startsWith('server.port=')) {
            const portString = line.split('=')[1].trim();
            const port = Number.parseInt(portString, 10);

            if (!Number.isNaN(port)) {
                return port;
            }
        }
    }
    
    return defaultPort;
}