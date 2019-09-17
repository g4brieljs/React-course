import React, { Component } from 'react';

class Formulario extends Component {
    // todolo que sea REACT, arriba
    state = {
        cantidad: '',
        plazo: ''
    }   

    // Metodo para calcular preio
    calcularPrecio = (e) => {
        e.preventDefault();

        // Destructuring
        const {cantidad, plazo} = this.state;
        
        this.props.datosPrestamos(cantidad, plazo);
    }

    // method para actualizar el state
    actualizarState = (e) => {
        // leer en valor de los form
        // console.log(e.target.value);

        // Aplicando un destrecturing
        const {name, value} = e.target;

        // actualizar el state
        this.setState({
            [name] : Number(value)
        })
    }

    // Method para habilitar el Submit
    habilitarSubmit = () =>{
        // Aplicar destructuring
        const { cantidad, plazo } = this.state;
        // Read vars
        const noValido = !cantidad || !plazo;
        // return
        return noValido;
    }

    render() { 
        return ( 
            <form onSubmit={this.calcularPrecio}>
                <div>
                    <label>Cantidad del prestamo: </label>
                    <input 
                        onChange={this.actualizarState} 
                        type="number" 
                        name="cantidad" 
                        className="u-full-width" 
                        placeholder="Ejemplo: 3000"
                    />
                </div>
                <div>
                    <label>Plazo para pagar:</label>
                    <select onChange={this.actualizarState} name="plazo" className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled = {this.habilitarSubmit()}
                        type="submit" 
                        value="Calcular" 
                        className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Formulario;