// Primero llammos el modulo de la class principal
// esto nos permite tener la clase principal aquí por decirlo así, y ya estar comunicada con el hijo
import Tarea from './15-Module-Class.js';


//Si heredas de una clase tambien puedes heredar los metodos
export default class ComprasPnedientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    // para reescribir el metodo
    mostrar(){
        super.mostrar();
        console.log( ` y tiene que ser ${this.cantidad}`);
    }
}         

let compra1 = new ComprasPnedientes('jabon', 'urgente', 3);

console.log(compra1.mostrar());