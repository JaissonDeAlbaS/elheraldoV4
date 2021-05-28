import React, {Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//services
import { noticiaService } from './services';
//css
import './App.css';
import './Components/estilos.css';

//componentes
import Alert from './Components/alert';
import Navbar from './Components/navbar';
import Jumbotron from './Components/jumbotron';
import Portada from './Components/portada';
import Noticias from './Components/noticias';
import Judiciales from './Components/judiciales';

//Imagenes
import logo from './Img/logo.png';
import img1 from './Img/0.jpg';
import img2 from './Img/1.jpg';

function App() {
  const [noticias, setNoticias] = useState([]);

  const guardar = () => {
    //guardar noticia
    const data = {
      nombreNoticia:'a', 
      descripcion:'a', 
      nombrePeriodista:'a', 
      visible:1, 
      idCategoria:1, 
      horaNoticia:'as', 
      imgNoticia:'asdasd', 
      resumen:'asdasd', 
    };
    noticiaService.setNoticia(data, e => {
      if (e.error) return console.log(e.mensaje);
      console.log(e);
    })
  }

  useEffect(() => {
    noticiaService.getNoticias(e => {
      if (e.error) return console.log(e.mensaje);
      setNoticias(e.data);
    });
  }, [])

  return (
    <Fragment>
      <Router>
        <Alert />
        <Portada logo={logo}/>
        <div className="container">
          <Navbar />
          <Jumbotron />
          <Noticias imagen={img1} />
          <Judiciales imagen={img2} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;