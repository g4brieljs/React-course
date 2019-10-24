import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = { 
    citas : []
   }

   // Al cargar la aplicacion
   componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
   }

  // Cuando eliminamos o agregamos una nueva cita
   componentDidUpdate(){
     localStorage.setItem('citas', JSON.stringify(this.state.citas));
   }

   // este tomara los datos para la nueva cita 
   crearNuevaCita = datos => {
    // copiar el state actual // es recomendable
     // parecido a un push
    const citas = [...this.state.citas, datos];
   
    // agregar nuevo state
     this.setState({ 
       citas
     })
   }

   // elimina las citas del state
   eliminarCita = id => {
     // tomar una copia del state
     const citasActuales = [...this.state.citas];
    
     // Utilizar filter para poder tomar elemneto id delo array
    const citas = citasActuales.filter(cita => cita.id !== id)


     // Actualiar el state 
     this.setState({
       citas
     })
    

   }

  render() { 
    return ( 
      <div className="container">
        <Header 
          titulo='Sistema de reservación de citas con REACT'
        />
        
        <div className="row">
          <div className="col-md-6 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>  

          <div className="mt-5 col-md-6 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>  
      </div> 
     );
  }
}
 
export default App;
