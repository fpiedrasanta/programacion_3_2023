class Bibliografia {
    constructor(bibliografia) {
        this.id = bibliografia.id;
        this.urlImagen = bibliografia.Image?.url;
        this.titulo = bibliografia.title;
        this.descripcion = bibliografia.description;
        this.urlDescarga = bibliografia.link;
    }
}