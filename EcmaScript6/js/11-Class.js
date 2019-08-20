// class in Javascript
// Class principal
class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // Una funcion adentro de una clase es un método
    mostrar(){
        console.log( `${this.nombre} tiene una prioridad de ${this.prioridad}`);    
    }
}
// class heredadda
//Si heredas de una clase tambien puedes heredar los metodos
class ComprasPnedientes extends Tarea{
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


// crear objetos                    
let tarea1 = new Tarea('To learn Javascript', 'Urgent');

// para poder mostrarlo en el DOM debmeos crear un metodo
// let contenido = document.querySelector('#app');
// contenido.innerHTML = `${tarea1.mostrar()}`;

// console.log(tarea1.mostrar());


// Let compras pendientes 

let compra1 = new ComprasPnedientes('jabon', 'urgente', 3);

console.log(compra1.mostrar());