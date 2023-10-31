async function getBibliografias(show) {
    try {
        response = await fetch("https://localhost:7106/Resource/Type/1");
        json = await response.json();
        
        show(json);
    } catch(e) {

    } finally {
        
    }
}

function getVideos() {

}