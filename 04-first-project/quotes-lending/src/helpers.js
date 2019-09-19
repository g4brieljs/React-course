export function calcularTotal(cantidad, plazo){
    // El algoritmo sera el siguiente
    // Su interes cambiará con el tiempo
    
    /*  
        Cantidade
        0 to 1000 = 25%
        1001 to 5000 = 20%
        5001 to 10000 = 15%
        +10001 = 10%
    */

    let totalCantidad;

    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    }else if(cantidad > 1001 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    }else if(cantidad > 5001 && cantidad <= 10000){
        totalCantidad = cantidad * .15;
    }else{
        totalCantidad = cantidad * .10;
    }


    /* 
   Los meses
        3 = 5%
        6 = 10%
        12 = 15%
        24 = 20%
    */

    let totalPlazo;

    switch(plazo){
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .1;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .2;
            break;

        default:
            break;
    }

    return cantidad + totalPlazo + totalCantidad;

}


