// function show task

//Si creamos un sistema o una funcion, que pueda crear informacion de Tarea, y que solo la use el objeto de tarea
function showTask(tarea, prioridad){
    return `The task ${tarea}, tiene una prioridad de ${prioridad}`;
}
// para poder evitar que otra persona use esta funcion con otro objebto, debemos usar prototypes


// object literal

const persona = {
    nombre: 'Gabriel',
    profeion: 'Web developer'
}



// object constructor 

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//un prototype nos permite que un objecto no acceda al metodo, aqui enlazamos este metodo para imprimir tareas, solo al objeto de Tarea
Tarea.prototype.ShowTask2 = function(){
    return `La tarea ${this.nombre}, tiene una prioridad ${this.urgencia}`;
}

const tarea1 = new Tarea('To learn Javascript, and React', 'Urgent');
const tarea2 = new Tarea('To learn css', 'Middle');

const showInfo = showTask(tarea1.nombre, tarea1.urgencia);
console.log(tarea1);
console.log(tarea2.ShowTask2()); // accede a los datos de Tarea, mediante un prototype, y este prototype solo funciona con el objeto Tarea
console.log(showInfo);

