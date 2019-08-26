import nombreTarea from './13-Module-var.js';
import crearTarea from './14-Module-Function.js';
import Tarea from './15-Module-Class.js';
import ComprasPendientes from './16-Module-class-Compras.js';



// Module var
console.log(nombreTarea);

// Module function
const tarea1 = crearTarea('Pasear al perro', 'Media');
console.log(tarea1);

// Module Class
const tarea2 = new Tarea('Aprender Javascript', 'Urgent');
console.log(tarea2);
tarea2.mostrar();

// Module Class herededada

const compra1 = new ComprasPendientes('Pizza', 'Urgente', 2);

console.log(compra1);
compra1.mostrar();