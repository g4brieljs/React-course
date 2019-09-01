// Object constructor, for object more dynamic, in ECMASCRIPT6, use class, but is good konlodeged

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// crear una nueva tarea 

const tarea1 = new Tarea('To learn Javascript and React', 'Urgente');

console.log(tarea1);
// you can acces equal object literal

// Difference is Object constructo you can create more object, more easy, soy and ecmascript 6, use class

const tarea2 = new Tarea('To learn css', 'Middle');

console.log(tarea2);

