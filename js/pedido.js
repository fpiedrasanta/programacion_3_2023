async function getBibliografias(show, page, pageSize, query, orderBy) {
    try {
        response = await fetch(`https://localhost:7106/Resource/Type/1?page=${page}&pageSize=${pageSize}&query=${query}&orderBy=${orderBy}`);
        json = await response.json();
        
        show(json);
    } catch(e) {

    } finally {
        
    }
}

function getVideos() {

}