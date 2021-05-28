import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class noticias extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                <span className="label label-default">Noticias</span>
                <h2>“Hay que lograr velocidad de vacunación en departamentos”: Minsalud</h2>
                <p className="text-justify">El ministro de Salud, Fernando Ruiz, dijo este viernes que la clave para lograr mayor velocidad en el Plan Nacional de Vacunación es imprimir celeridad “en los departamentos”.
                <br/> 
                “El mayor reto que tenemos ahora es en lograr velocidad de aplicación en los departamentos. Lo veremos la semana entrante con la distribución de más de 1 millón y medio de vacunas, para aplicar a mayores de 80 años (...). Esperamos que a finales de marzo hayamos terminado la vacunación de personas de primera línea y estemos avanzados en personas mayores de 80 años. Esto depende del Gobierno en el acopio de vacunas y de la celeridad de los territorios”, indicó el jefe de la cartera de Protección Social.   
                </p>
                </div>

                <div className="col-md-8">
                    <div className="row">    
                        <div className="col-md-10">
                            <div className="thumbnail">
                                <Link to="#" target="_blank">
                                    <img src={this.props.imagen} alt={this.props.imagen} className="img-thumbnail" />
                                    <div className="caption">
                                        <p>El ministro Fernando Ruiz reiteró que si no se toman medidas de autocuidado en Semana Santa podría haber un tercer pico de contagios en el país.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>
                
                <div className="col-md-">
                    <div className="row">    
                        <div className="col-md-10">
                            <div className="thumbnail">
                                <Link to="#" target="_blank">
                                    <img src={this.props.imagen} alt={this.props.imagen} className="img-thumbnail" />
                                    <div className="caption">
                                        <p>El ministro Fernando Ruiz reiteró que si no se toman medidas de autocuidado en Semana Santa podría haber un tercer pico de contagios en el país.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default noticias;