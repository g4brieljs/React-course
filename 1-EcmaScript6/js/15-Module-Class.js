
// Class principal
export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // Una funcion adentro de una clase es un método
    mostrar(){
        console.log( `${this.nombre} tiene una prioridad de ${this.prioridad}`);    
    }
}