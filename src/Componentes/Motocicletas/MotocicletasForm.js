import React from "react";
import axios from "axios";

class MotocicletasForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //Funcion para enviar request POST a endpoint
    submitNuevaMotocicleta(event) {
        //anular el comportamiento por defecto del form
        event.preventDefault()
        //Peticion con Axios
        axios.post('http://localhost:7000/motocicletas', {
            marca: this.refs.marca.value,
            categoria: this.refs.categoria.value,
            linea: this.refs.linea.value,
            modelo: this.refs.modelo.value,
            cilindraje: this.refs.cilindraje.value,
            color: this.refs.color.value,
            placa: this.refs.placa.value,

        }
        ).then(respuesta => console.log(respuesta.data))
            .catch(error => console.log(error))
    }

    render() {
        return (

            <div className="row">
                <h5 className="center">Nueva Motocicleta</h5>
                <div className="col s3"></div>
                <form className="col s6" onSubmit={this.submitNuevaMotocicleta.bind(this)}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="marca" ref="marca" type="text" />
                            <label htmlFor="marca">Marca</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="categoria" ref="categoria" type="text" />
                            <label htmlFor="categoria">Categoria</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="linea" ref="linea" type="text" />
                            <label htmlFor="linea">Linea</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="modelo" ref="modelo" type="text" />
                            <label htmlFor="modelo">Modelo - Año</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="cilindraje" ref="cilindraje" type="text" />
                            <label htmlFor="cilindraje">Cilindraje</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="color" ref="color" type="text" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="placa" ref="placa" type="text" />
                            <label htmlFor="placa">Placa</label>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="input-field col s12">
                            <button type="submit" className="waves-effect waves-light btn" name="action">Registrar</button>
                        </div>
                    </div>
                </form>
                <div className="col s3"></div>
            </div>

        )
    }
}

export default MotocicletasForm