import React, { Component, Fragment } from 'react';

// styles
import './normalize.css';
import './skeleton.css';

// Components
import Formulario from './component/Formulario';
// Helpers para el componetne Formulario
import {calcularTotal} from './helpers';
// Components
import Resultado from './component/Resultado';
import Mensajes from './component/Mensajes';
import Spinner from './component/Spinner';





class App extends Component {

  state = {
    total: '',
    cantidad: '',
    plazo: '',
    cargando: false

  }

  // props
  datosPrestamos = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);
    
    // Agregar al state, el total, con sus argumentos
    this.setState({
      cargando: true
    }, () => {
      setTimeout(() => {
        this.setState({
          // La nueva vs de js, el object literal Enhacement
          total, 
          cantidad,
          plazo,
          cargando: false
        });
      }, 1000);
    })

  }

  render() {
    // aplicamos un Destructuring
    const {total, plazo, cantidad, cargando } = this.state;
    
    // Cargar el component condicionalmente
    let componente;
    if(total === '' && !cargando){
      componente = <Mensajes />;
    }else if(cargando){
      componente = <Spinner />
    }else{
      componente = <Resultado  
                        total={total}
                        plazo={plazo}
                        cantidad={cantidad}
                      />;
    }

    return ( 
      <Fragment>  
        <h1>Calculadora de prestamos</h1>
        <div className="container">
          <Formulario 
            // Datos prestamos - el identificador
            datosPrestamos = {this.datosPrestamos}
          /> 
          <div className="mensajes">
            {componente}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
