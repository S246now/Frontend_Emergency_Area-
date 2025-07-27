/* 
* Fetch the Documents by category
*/
export async function fetchDocuments(categoryId) {
    const response = await fetch(`http://127.0.0.1:8000/api/documento/${categoryId}`, {
        cache: 'no-store',
    });
    
    const data = await response.json();
    const files = Array.isArray(data) ? data : [data];
    return files
    
}
