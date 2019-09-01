import React, { Component, Fragment } from 'react';
import Formulario from './component/Formulario';

import './normalize.css';
import './skeleton.css';

class App extends Component {
  render() {
    return ( 
      <Fragment>  
        <h1>Loan quote</h1>
        <div className="container">
          <Formulario /> 
        </div>
      </Fragment>
    );
  }
}

export default App;
