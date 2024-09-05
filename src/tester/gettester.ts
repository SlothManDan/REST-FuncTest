export async function getTester(url: string) {
    let result = null;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });

        result = await response.json();
    } catch (error) {
        result = error;
    }

    return result;
}