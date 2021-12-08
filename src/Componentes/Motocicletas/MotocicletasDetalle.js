import axios from "axios";
import React from "react";

const MotocicletasDetalle = ({ motocicleta }) => {

    function deleteMotocicleta() {

        console.log(motocicleta.id)

        axios.delete('http://localhost:7000/motocicletas', {
            _id: motocicleta._id
        })
            .then(respuesta => console.log(respuesta.data))
            .catch(error => console.log(error))
    }

    return (

        <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
                <div className="card blue lighten-1 z-depth-5">
                    <div className="card-content white-text">
                        <span className="card-title">Detalle de {motocicleta.marca} {motocicleta.linea}</span>
                        <p>Marca: {motocicleta.marca}</p>
                        <p>Categoria: {motocicleta.categoria}</p>
                        <p>Linea: {motocicleta.linea}</p>
                        <p>Modelo: {motocicleta.modelo}</p>
                        <p>Cilindraje: {motocicleta.cilindraje}</p>
                        <p>Color: {motocicleta.color}</p>
                        <p>Placa: {motocicleta.placa}</p>
                        <p>Creacion: {motocicleta.fecha_creacion}</p>
                    </div>
                    <div className="card-action">
                        <center>
                            <button className="waves-effect waves-light btn" onClick={deleteMotocicleta.bind(this)}>Eliminar</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="col s3"></div>
        </div>

    )
}

export default MotocicletasDetalle