// Spread Operators ...

// NOs permite combinar dos arreglos diferentes

let lenguajes = ['js', 'java', 'php'];
let frameworks = ['Reactjs', 'Laravel'];

// ¿cómo lo unimos?

// old version

// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion);

// New version

let combinacion = [...lenguajes, ...frameworks];

console.log(combinacion);

// Can copy arrays

let newArray = [...lenguajes];

console.log(newArray);

// You can use this spread Operators

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);
console.log(lenguajes); // se mantiene el array intacto

// Se podira usar para mostrar el ultimo dato que el usario interctue, por ejmeplo, Un carrito de compras, cuando, podriamos ir mostrando el ultimo producto que agregue y su carrito se mantien con el orden del ultimo añadio


