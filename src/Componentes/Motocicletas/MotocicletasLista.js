import { render } from "@testing-library/react";
import React from "react";

const MotocicletasLista = (props) => {
    return (

        <ul className="collection with-header">
            <li className="collection-header"><h4>Motocicletas</h4></li>

            {
                props.listamotocicletas.map((elemento) => {
                    return (
                        <li className="collection-item"
                            key={elemento._id}
                            onClick={props.actualizarMotocicleta.bind(this, elemento)}
                        >
                            <div className="row">
                                <div className="col s6">
                                    {elemento.marca} {elemento.linea}
                                </div>
                                <div className="col s6">
                                    {elemento.placa}
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    )
}

export default MotocicletasLista