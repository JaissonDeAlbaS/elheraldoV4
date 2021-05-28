import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Components/estilos.css';

//componentes
import Alert from '../Components/alert';
import Navbar from '../Components/navbar';
import Jumbotron from '../Components/jumbotron';
import Portada from '../Components/portada';
import Noticias from '../Components/noticias';
import Judiciales from '../Components/judiciales';

//Imagenes
import logo from '../Img/logo.png';
import img1 from '../Img/0.jpg';
import img2 from '../Img/1.jpg';

const news = () => {
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
    )
}

export default news