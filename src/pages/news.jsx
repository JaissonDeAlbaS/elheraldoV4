import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//services
import { noticiaService, categoriaService } from '../services';
import '../Components/estilos.css';

//componentes
import Alert from '../Components/alert';
import Navbar from '../Components/navbar';
import Jumbotron from '../Components/jumbotron';
import Portada from '../Components/portada';
import Noticia from '../Components/noticia';

//Imagenes
import logo from '../Img/logo.png';
const News = () => {

    const [noticias, setNoticias] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        categoriaService.getCategorias(e => {
            if (e.error) return console.log(e.mensaje);
            setCategorias(e.data);
            //obtener noticias
            noticiaService.getNoticiasVisibles(e2 => {
              if (e2.error) return console.log(e2.mensaje);
              setNoticias(e2.data);
            })
          })
      }, [])

    return (
         <Fragment>
            <Router>
                <Alert />
                <Portada logo={logo}/>
                <div className="container">
                <Navbar />
                <Jumbotron />
                    <div className="row">
                        {noticias.map((item, i) => (
                            <Noticia key={"noticia-view-" + i} datos={item} categorias={categorias} />
                        ))}
                    </div>
                </div>
            </Router>
        </Fragment>
    )
}

export default News