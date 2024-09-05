export async function deleteTester(url: string) {
    let result = null;

    try{
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
    
        result = await response.json();
    }catch(error){
        result = error;
    }
    
    return result;
}