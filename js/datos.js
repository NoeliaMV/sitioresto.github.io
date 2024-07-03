// Origen de los datos
const origen = 'http://127.0.0.1:5000/api-restaurante/platillo'

// Evento a escuchar
window.addEventListener('DOMContentLoaded', evento => {
    console.log('Se cargó la página!');
    cargarDatos(origen);
    evento.preventDefault();
});

// Carga de los datos
async function cargarDatos(url) {
    let datos = await fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => datos);

    console.log(datos);
    let seccion = document.querySelector('section');
    let lista = document.createElement('ul');
    for (d of datos) {
        let item = document.createElement('li');
        let texto = `${d.apellido}, ${d.nombre} - ${d.fecha_nac}`;
        item.innerHTML = texto;
        lista.appendChild(item);
    }

    seccion.appendChild(lista);
}