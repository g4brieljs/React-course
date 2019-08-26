// arrays and .map

const carrito = ['1', ' 2', ' 3.'];

// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// //Si queremos un imprimir los datos en nuestro DOM
// appContenedor.innerHTML = carrito;

// si queremos acceder a un solo objeto

carrito.map(producto =>{
    return 'El producto es ' + producto;
});

// Object Keys

const persona = {
    nombre: 'Gabriel',
    profesion: 'Desarrollador web',
    edad: 500
}

// destructuring 

// const {nombre} = persona;

// Object keys

console.log(Object.keys(persona));