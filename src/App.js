import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Buscador from './component/Buscador';


class App extends Component {

  state = {
    termino:"cafe"
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/videos/?key={this.state.termino}`;
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino
    }, ()=>{
      this.consultarApi();
    })
  }
  render() {
  return  (
    <div className="App container">
      <div className="jumbotron">
        <h1 className="lead text-center">Literatura medica</h1>
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        /> 
      </div>
      {this.state.termino}
      <div className="fot">
      <footer className="text-muted py-5">
        <p>&copy; COPYRIGHT 2014 <a href="mailto:medstudioparato2@gmail.com">medstudio & Co</a>&nbsp;2021 </p>
      </footer>
      </div>
    </div>
   );
 }
}

export default App;
