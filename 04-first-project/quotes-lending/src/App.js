import React, { Component, Fragment } from 'react';
import Formulario from './component/Formulario';

import './normalize.css';
import './skeleton.css';

import {calcularTotal} from './helpers';

class App extends Component {

  // props
  datosPrestamos = (cantidad, plazo) => {
    calcularTotal();
    
  }

  render() {
    return ( 
      <Fragment>  
        <h1>Loan quote</h1>
        <div className="container">
          <Formulario 
            // Datos prestamos - el identificador
            datosPrestamos = {this.datosPrestamos}
          /> 
        </div>
      </Fragment>
    );
  }
}

export default App;
