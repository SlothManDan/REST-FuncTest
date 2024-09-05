// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postTester(url: string, data: any) {
    let result = null;
    
    try {
        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        result = await response.json();
    }catch(error){
        result = error;
    }

    return result;
}