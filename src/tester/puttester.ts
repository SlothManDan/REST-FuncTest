// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function putTester(url: string, data: any) {
    let result = null;

    try{
        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
        });

        result = await response.json();
    }catch(error){
        result = error;
    }
    
    return result;
}