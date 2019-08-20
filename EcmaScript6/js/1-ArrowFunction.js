// Arrow Function


// Old function 
let Viajando = function(destino){
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje = viajando('Paris');

console.log(viaje);

// NEW Arrow function
// When pass only one argument 
let viajando2 = destino => `Viajanado a la ciudad: ${destino}`;
//When no pass arguments
// let viajando =>{}
// More one you use (a,b) =>
    
let viaje = viajando2('Paris')