// Los modulos 
// Podemos pasar variables de una archivo js a otro, pero eso hace que carguemos varios archivos al HTML 
// LO mejor es exportar e importar

// IMPORTANTE par aque funcione debemos agregarle un atributo al script type="module"
const NombreTarea = 'Pasear al perro';

// Si queremos exportar multiples tareas
const tarea = 'tarea';

export default{
    nombre: NombreTarea,
    tarea: tarea
}

// solo puedo tener un export default por document