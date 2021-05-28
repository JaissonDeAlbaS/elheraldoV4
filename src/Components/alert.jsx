import React, { Component } from 'react';

class alert extends Component{

    render(){
        return(
            <div class="alert alert-danger" role="alert">
                Al continuar la navegación el usuario autoriza que el portal web, propiedad de EL HERALDO S.A. en el que se encuentra navegando, haga uso de Cookies de acuerdo con esta Política.
                <button type="button" class="btn btn-danger">Entendido</button>
            </div>
        )
    }
}

export default alert;