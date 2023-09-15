const frmContacto = document.getElementById("contacto");

frmContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById("txt_nombre").value;

    alert(nombre);
});