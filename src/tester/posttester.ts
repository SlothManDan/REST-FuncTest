// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postTester(url: string, data: any) {
    const response = await fetch(url, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });

    const result = await response.json();
    return result;
}