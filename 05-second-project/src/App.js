import React, { Component } from 'react';
import './bootstrap.min.css';
import NuevaCita from './components/NuevaCita';
import Header from './components/Header';

class App extends Component {
  state = { 
    citas : []
   }

   // este tomara los datos para la nueva cita 
   crearNuevaCita = datos => {
     // copiar el state actual // es recomendable
    const citas = [...this.state.citas, datos];
     // agregar nuevo state
     this.setState({ 
       citas
     })
   }
  render() { 
    return ( 
      <div className="container">
        <Header 
          titulo='Reserva tu cita'
        />
        <NuevaCita 
          crearNuevaCita={this.crearNuevaCita}
        />
      </div>
     );
  }
}
 
export default App;
