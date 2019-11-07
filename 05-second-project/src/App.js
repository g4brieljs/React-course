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
    
     // Utilizar filter para poder tomar elemneto id del array - Al decirle que cita.id no es igual al id, esto nos tomara del state todos los que no sean iguales y es como si eliminaramos el seleccionado
    const citas = citasActuales.filter(cita => cita.id !== id);

    // ejemplo: filter tomara todo los que no sean iguales al id seleccionado
    /*
    const citas = [
      {id: 1, cita: 'Juanito'},
      {id: 2, cita: 'Pedrito'}
    ] 
    */


     // Actualiar el state 
     this.setState({
       citas
     })
    

   }

  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto lado-imagen">
          </div>  

          <div className="card px-5 col-md-6 ">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
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
