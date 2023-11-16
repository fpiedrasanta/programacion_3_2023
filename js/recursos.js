const PAGE_SIZE = 2;

getBibliografias(showBibliografia, 1, PAGE_SIZE, "", "Title");

let listBibliografy = {};

const firstBibliografy = document.getElementById("first_bibliografy");

firstBibliografy.addEventListener("click", (evt) => {
    getBibliografias(showBibliografia, 1, PAGE_SIZE, "", "Title");
});

const prevBibliografy = document.getElementById("prev_bibliografy");

prevBibliografy.addEventListener("click", (evt) => {
    getBibliografias(showBibliografia, listBibliografy.prevPage, PAGE_SIZE, "", "Title");
});

const nextBibliografy = document.getElementById("next_bibliografy");

nextBibliografy.addEventListener("click", (evt) => {
    getBibliografias(showBibliografia, listBibliografy.nextPage, PAGE_SIZE, "", "Title");
});

const lastBibliografy = document.getElementById("last_bibliografy");

lastBibliografy.addEventListener("click", (evt) => {
    getBibliografias(showBibliografia, listBibliografy.totalPage, PAGE_SIZE, "", "Title");
});

function showBibliografia(bibliografias) {
    listBibliografy = bibliografias;

    const pageBibliografy = document.getElementById("page_bibliografy");
    pageBibliografy.innerText = listBibliografy.page;

    if(!listBibliografy.hasNextPage) {
        console.log("Ultima página");
    }

    if(!listBibliografy.hasPrevPage) {
        console.log("Primera página");
    }

    nextBibliografy.disabled = !listBibliografy.hasNextPage;
    lastBibliografy.disabled = !listBibliografy.hasNextPage;
    prevBibliografy.disabled = !listBibliografy.hasPrevPage;
    firstBibliografy.disabled = !listBibliografy.hasPrevPage;

    const listaBibliografia = document.getElementById("bibliografia_list");

    listaBibliografia.innerHTML = "";
    for(const bibliografia of bibliografias.list) {
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

