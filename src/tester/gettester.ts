export async function getTester(url: string) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });

    const result = await response.json();
    return result;
}