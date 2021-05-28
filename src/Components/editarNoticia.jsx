import React, { useEffect, useState } from 'react';

import { noticiaService } from '../services';

const EditarNoticia = ({noticia, categorias, refrescar}) => {

    const [nombreNoticia, setNombreNoticia] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [nombrePeriodista, setNombrePeriodista] = useState("");
    const [visible, setVisible] = useState(1);
    const [idCategoria, setIdCategoria] = useState("");
    const [imgNoticia, setImgNoticia] = useState("");
    const [resumen, setResumen] = useState("");

    useEffect(() => {
        setNombreNoticia(noticia?.nombreNoticia ?? "");
        setDescripcion(noticia?.descripcion ?? "");
        setNombrePeriodista(noticia?.nombrePeriodista ?? "");
        setVisible(noticia?.visible ?? "");
        setIdCategoria(noticia?.idCategoria ?? "");
        setImgNoticia(noticia?.imgNoticia ?? "");
        setResumen(noticia?.resumen ?? "");
    }, [ noticia ])

    const actualizar = () => {
      const datos = {
        id:noticia?.id ?? 0,
        nombreNoticia: nombreNoticia,
        descripcion: descripcion,
        nombrePeriodista: nombrePeriodista,
        visible: visible,
        idCategoria: idCategoria,
        imgNoticia: imgNoticia,
        resumen: resumen,
      }
      noticiaService.setNoticiaUpdate(datos, e => {
        if (e.error) return console.log(e.mensaje);
        refrescar(e.data);
      })
      
    }
    
    return(
        <div className="modal fade" id="modalActualizar" tabIndex={-1} aria-labelledby="modalguardarLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalguardarLabel">Actualizar noticia</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="Nombre" className="form-label">Nombre noticia</label>
                    <input type="text" className="form-control" id="Nombre" value={nombreNoticia} onChange={(e)=>setNombreNoticia(e.target.value)}/>
                  </div>
                  <div className="col-6">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="periodista" className="form-label">nombrePeriodista</label>
                    <input type="text" className="form-control" id="periodista" value={nombrePeriodista} onChange={(e)=>setNombrePeriodista(e.target.value)}/>
                  </div>
                  <div className="col-md-12">
                  <label className="form-label">Visible:</label>
                    <select className="form-control" onChange={(e)=>setVisible(e.target.value)}>
                      <option value={1} defaultChecked={visible === 1}>si</option>
                      <option value={0} defaultChecked={visible === 0}>No</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                  <label className="form-label">Categoria:</label>
                    <select className="form-control" onChange={(e)=>setIdCategoria(e.target.value)}>
                      {categorias.map((e, i) => (
                          <option key={"categoria-" + i} value={e.id} defaultChecked={idCategoria === 1}>{e.nombreCategoria}</option>
                      ))}
                    </select>
                    </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">url img Noticia</label>
                      <input type="text" className="form-control" id="ImgNoticia" value={imgNoticia} onChange={(e)=>setImgNoticia(e.target.value)}/>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">resumen</label>
                      <input type="text" className="form-control" id="resumen" value={resumen} onChange={(e)=>setResumen(e.target.value)}/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={actualizar}>Actualizar</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    )
    
}

export default EditarNoticia;