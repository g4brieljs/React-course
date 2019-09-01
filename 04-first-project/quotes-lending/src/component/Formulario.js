import React, { Component } from 'react';

class Formulario extends Component {
    state = {
        cantidad: '',
        plazo: ''
    }   

    actualizarState = () => {
        console.log('escribiendo')
    }

    render() { 
        return ( 
            <form>
                <div>
                    <label>Cantidad del prestamo:</label>
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
                    <select name="plazo" className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Calcular" className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Formulario;