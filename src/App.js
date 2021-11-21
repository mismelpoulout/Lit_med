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
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span>Literatura medica</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
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
