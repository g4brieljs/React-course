import React from 'react';

const Resultado = (props) => {
    return ( 
        <div className="u-full-width resultados">
            <h2>Resultados</h2>
            <p>La cantidad es: $ {props.cantidad}</p>
            <p>El plazo es: {props.plazo}</p>
            <p>TOTAL: $ {props.plazo}</p>
            <p>Pago mensual: $ { (props.total / props.plazo).toFixed(2) } mensual</p>
        </div>
     );
}
 
export default Resultado;