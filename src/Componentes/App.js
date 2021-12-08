// import logo from './logo.svg';
// import './App.css';
import React from "react";
import MotocicletasLista from "./Motocicletas/MotocicletasLista";
import MotocicletasDetalle from "./Motocicletas/MotocicletasDetalle";
import MotocicletasForm from "./Motocicletas/MotocicletasForm";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      motocicletas: [],
      motocicletaActual: {}
    }
    //vincular la funcion actualizarMotocicleta al objeto
    this.actualizarMotocicleta = this.actualizarMotocicleta.bind(this)
  }

  componentDidMount() {
    const url = "http://localhost:7000/motocicletas"
    axios.get(url)
      .then((respuesta) => {
        this.setState({
          motocicletas: respuesta.data
        })
      })
      .catch((error) => { console.log(error) })
  }

  //Funcion para asignar la motocicletaActual
  actualizarMotocicleta(motocicleta) {
    this.setState({
      motocicletaActual: motocicleta
    })
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col s12">
            <nav>
              <div className="nav-wrapper teal lighten-2">
                <a href="#" className="brand-logo m-">Motocicletas</a>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <MotocicletasLista listamotocicletas={this.state.motocicletas}
              actualizarMotocicleta={this.actualizarMotocicleta}
            // numero={1}
            />
          </div>
          <div className="col s6">
            <MotocicletasDetalle motocicleta={this.state.motocicletaActual} />
          </div>
          <div className="col s3"></div>
        </div>

        <div className="row">
          <div className="col s12">
            <MotocicletasForm />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
