getBibliografias(showBibliografia);

function showBibliografia(bibliografias) {
    console.log(bibliografias);
    
    const listaBibliografia = document.getElementById("bibliografia_list");
    for(const bibliografia of bibliografias) {
        const b = new Bibliografia(bibliografia);
        const template = getTemplate(b);
        listaBibliografia.append(template);
    }
}

function getTemplate(bibliografia) {
    const div = document.createElement("div");
    div.className = "card bibliografia";
    div.innerHTML = `<img src="${bibliografia.urlImagen}" 
                          class="card-img-top bibliografia-imagen" 
                          alt="imagen bibliografía">
                     <div class="card-body bibliografia-cuerpo">
                        <h3 class="card-title bibliografia-titulo">${bibliografia.titulo}</h3>
                        <p class="card-text bibliografia-descripcion">
                            ${bibliografia.descripcion}
                        </p>
                        <a href="${bibliografia.urlDescarga}}" class="btn btn-primary">Descargar</a>
                     </div>`;
    return div;
}

