import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Noticia = ({datos, categorias}) => {

    const [verImg, setVerImg] = useState(true);

    /* 
        nombreNoticia
        descripcion
        nombrePeriodista
        idCategoria
        imgNoticia
        resumen
        verFecha(datos.fechaCreacion)
        verHora(datos.fechaCreacion)
    */
    const verCategoria = (id) => {
        const categoria = categorias.filter(e => e.id === id);
        return (categoria.length > 0) ? categoria[0].nombreCategoria : "";
    }

    const verFecha = (fecha) => {
        const date = new Date(fecha);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
  
    const verHora = (fecha) => {
        const date = new Date(fecha);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
   
    return(
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12">
                    <span className="label label-default">{verCategoria(datos.idCategoria)}</span>
                    <div className="row">    
                        <div className="col-md-10">
                            <div className="thumbnail">
                                <Link to="#" target="_blank">
                                    {verImg ?
                                        <img src={datos.imgNoticia} alt="imagen-noticia" className="img-thumbnail" onErrorCapture={() => setVerImg(false)} />
                                    : ""}
                                    <div className="caption">
                                        <p>El ministro Fernando Ruiz reiteró que si no se toman medidas de autocuidado en Semana Santa podría haber un tercer pico de contagios en el país.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Noticia;