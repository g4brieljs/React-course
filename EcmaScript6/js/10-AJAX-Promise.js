const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    // pasar la cantidad a la API

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // El llamado a AJAX consta de 3 o 4 partes depndiendo, Crear el llamado, abrir la conexion, mandar los datos, yenviar los datos, en algunos casos es opcional el error

    // Llamada a AJAX
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    // TOMA 3 parametros, el primero es GET O POST, luego la URL, y si quieres que sea Asincrono o no
    xhr.open('GET', api, true);

    // On load
    xhr.onload = () => {
        // una vez tengas el onload, revisas la respuestas, usualmente por el status
        if(xhr.status === 200){
            // si el llamado es correcto usamos resolve
            // .results es de la api, y xhr.responseText es la respuesta
            // con JSON.parse convierte los string a un objeto para poder usarlo con JAVASCRIPT
            resolve( JSON.parse(xhr.responseText).results);
        }else{
            // Cuando hubo un error
            reject(Error(xhr.statusText));
        }
    }

    // opcional (on error)
    // xhr.oneror = (error) => reject(error);
    // Send

    // se encarga de enviar a la base de datos
    xhr.send()
});

descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error ' + error)
        )
    );
