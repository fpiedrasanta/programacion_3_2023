async function getBibliografias(show) {
    try {
        response = await fetch("https://localhost:7270/Bibliografia");
        json = await response.json();
        
        show(json);
    } catch(e) {

    } finally {
        
    }
}

function getVideos() {

}