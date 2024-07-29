import { get } from "node:http";

export function getTester(path: string) {
    let response = ""

    get(path, (res) => {
        res.on('data', (chunk) => {
            response += chunk;
        });
    });

    return response;
}