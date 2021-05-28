import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Noticia = ({datos, categorias}) => {

    const [verImg, setVerImg] = useState(true);

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
                    <label htmlFor="">
                        <span class="badge bg-danger text-white">{verCategoria(datos.idCategoria)}</span> 
                        <span class="text-right">{ verFecha(datos.fechaCreacion) } - { verHora(datos.fechaCreacion) }</span>
                    </label>
                    <div className="row">    
                        <div className="col-md-10">
                            <div className="thumbnail">
                                <Link to="#" target="_blank">
                                    {verImg ?
                                        <img src={datos.imgNoticia} alt="imagen-noticia" className="img-thumbnail" onErrorCapture={() => setVerImg(false)} />
                                    : ""}
                                </Link>
                                    <div className="caption">
                                        <h5><b>{ datos.descripcion }</b></h5>
                                    </div>
                                    <p>{datos.resumen}</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Noticia;