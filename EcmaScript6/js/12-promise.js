// promises
// Cuando haces llamadas asyncronas a una api, con 2 opciones, si falla o funciona

const aplicarDescuento = new Promise((resolve, reject) => {

    setTimeout( () => {
        let descuento = true;

        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);

});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});

