import React, { Component } from 'react';

class portada extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img src={this.props.logo} alt={this.props.logo} className="center-block" />
                </div>
            </div>
        )
    }
}

export default portada;