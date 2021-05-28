import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class jumbotron extends Component{

    render(){
        return(
            <div className="jumbotron">
                <h1>VACUNAS COVID 19</h1>
                <p>
                    “Convulsiones no son por efecto de la vacuna”: neurólogo 
                <br/>
                    Especialista que atiende caso de la enfermera Yeidis Pérez asegura que la paciente está consciente. Resultados del TAC son normales
                </p>
                <p>
                    <Link 
                        class="btn btn-primary btn-lg" 
                        to="#" 
                        role="button">Leer mas
                    </Link>
                </p>
            </div>
        )
    }
}

export default jumbotron;