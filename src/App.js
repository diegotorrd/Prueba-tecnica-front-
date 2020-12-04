import React, { Component } from 'react';
import './App.css';

//componentes
import Login from './components/Login'
import Notas from './components/Notas'

class App extends Component {

  render() {
    return (
      <div>
        <h1>PRUEBA TÉCNICA UTP </h1>
        <Login />


        <br />
        <br />
        <h2>LISTADO DE NOTAS:</h2>
        <Notas />
      </div>
    )

  }

}

export default App;
