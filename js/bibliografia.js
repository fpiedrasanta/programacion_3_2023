class Bibliografia {
    constructor(bibliografia) {
        this.id = bibliografia.id;
        this.urlImagen = "https://localhost:7106" + bibliografia.link;
        this.titulo = bibliografia.title;
        this.descripcion = bibliografia.description;
        this.urlDescarga = "https://localhost:7106" + bibliografia.link;
    }
}