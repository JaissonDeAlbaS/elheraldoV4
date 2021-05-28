import React, { Component } from 'react';

class judiciales extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-8">
                    <img src={this.props.imagen} alt={this.props.imagen} className="img-thumbnail" />
                </div>
                <div className="col-md-4">
                    <span className="label label-danger">Judiciales</span>
                    <h2>Capturan a hombre en Las Delicias con 95 papeletas de base cocaína</h2>
                    <p className="text-justify">La patrulla del cuadrante del barrio Las Delicias adscritos a la Estación de Policía Centro Histórico, capturó a un hombre que transportaba en uno de los bolsillos de su pantalón una bolsa en la que, al      parecer, llevaba 95 papeletas de lo que sería base de cocaína, la tarde de este martes.
                        <br/>
                        Se trata de Alejandro Alberto Ortega Navarro, de 34 años, oriundo del municipio de Baranoa, Atlántico, quien fue llevado hasta la Unidad de Reacción Inmediata de la Fiscalía General de la Nación, donde fue judicializado por el delito de tráfico de estupefacientes.
                        <br/>
                        Según la Policía, el hombre iba caminando por la calle 69 con carrera 42, cuando fue requerido para una requisa y fue allí que le encontraron el estupefaciente que creen los uniformados iba a ser distribuido en diferentes sectores de la ciudad de Barranquilla.
                    </p>
                </div>
            </div>
        )
    }
}

export default judiciales;