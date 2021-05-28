import React, {useEffect, useState } from 'react';
//services
import { noticiaService } from './services';
//css
import './App.css';
import "./pages/style.css"
import LoginRouter from './routes/LoginRouter';

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
    <LoginRouter />
  );
}

export default App;