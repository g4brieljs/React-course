import React, { Component } from 'react';
import uuid from 'uuid';

const stateInitial = { 
        cita : {
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : ''
        },
        error : false
}
 
class NuevaCita extends Component {
    state = { ...stateInitial }

     handleChange = e => {

         // colocar lo que le usuario escribe ne el state
         this.setState({
             cita : {
                 ...this.state.cita,
                 [e.target.name] : e.target.value
             }
         })
     }

     // Cuando el usuario escribe en el state
     handleSubmit = e => {
         e.preventDefault();

         // Extraemos los valores del state
        // Distructuring
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        
         // Validad que todos los campos esten llenos

        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            });
        }else{
            this.setState({
                error: false
            })

            return;
        }

        // generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
         // Agregar al state
         this.props.crearNuevaCita(nuevaCita);

         // colocar en el state el stateInitial
         this.setState({
             ...stateInitial
         })

     }

    render() { 
        const { error } = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llenar el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb5 text-center">Todos los campos son obligatorios</div> : null }

                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />


                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los Sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                >
                                </textarea>
                            </div>
                        </div> {/* form-group */}


                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />

                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;