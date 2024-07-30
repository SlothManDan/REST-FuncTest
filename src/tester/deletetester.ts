export async function deleteTester(url: string) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
    });

    const result = await response.json();
    return result;
}