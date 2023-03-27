import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Body from './Components/Body';
import { Component } from 'react';
import Swal from 'sweetalert2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      materia: [
        { id: 0, clave: "AEB-1011", materia: "Desarrollo de Aplicaciones Moviles", hora: "17:00-18:00", grupo: "C7A" },
        { id: 1, clave: "AEB-1055", materia: "Programacion Web", hora: "14:00-15:00", grupo: "C7A" },
        { id: 2, clave: "SCD-1066", materia: "Lenguajes y Automatas II", hora: "16:00-17:00", grupo: "C7A" },
        { id: 3, clave: "ACA-0909", materia: "Taller de Investigacion I", hora: "13:00-14:00", grupo: "C7A" },
        { id: 4, clave: "AEB-1011", materia: "Desarrollo de Aplicaciones Moviles", hora: "16:00-17:00", grupo: "C7B" },
        { id: 5, clave: "AEB-1055", materia: "Programacion Web", hora: "17:00-18:00", grupo: "C7B" },
        { id: 6, clave: "SCD-1016", materia: "Lenguajes y Automatas II", hora: "15:00-16:00", grupo: "C7B" },
        { id: 7, clave: "ACA-0909", materia: "Taller de Investigacion", hora: "14:00-15:00", grupo: "C7B" },
      ],
      lista: [],
      desactivado: false,
    };
  }
  guardarCambios = (e) => {
    let temporal = this.state.lista.find((d, i) => d.clave !== e.clave)
    console.log(temporal)
    this.setState({
      lista: [...this.state.lista, e],
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Materia agregado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  eliminar = (r) => {
    let temporal = this.state.lista.filter((d, i) => d.id !== r.id)
    this.setState({
      lista: temporal,

    })
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Materia eliminada',
      showConfirmButton: false,
      timer: 1500
    })
  }
  verificar = (r) => {
    let temporal = this.state.lista.find((p, i) => p.id === r.id && p.clave === r.clave)
    return temporal
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner titulo="Por una Juventud Integrada al Desarrollo de Mexico"> </Banner>
        <Body
          clave={this.state.clave}
          materia={this.state.materia}
          hora={this.state.hora}
          grupo={this.state.grupo}
          guardarCambios={this.guardarCambios}
          desactivado={this.state.desactivado}
          lista={this.state.lista}
          eliminar={this.eliminar}
          verificar={this.verificar}
        />
        <Banner titulo="Copyright Todos los derechos reservados"></Banner>
      </div>
    );
  }
}
export default App;