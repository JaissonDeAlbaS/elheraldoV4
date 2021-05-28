import React, { useState, useEffect } from 'react'
import EditarNoticia from '../Components/editarNoticia';
import NuevaNoticia from '../Components/nuevaNoticia';
import img1 from '../Img/favicon.jpg';

import { noticiaService, categoriaService } from '../services';

const Admin = () => {
    const [noticiaEdit, setNoticiaEdit] = useState();
    const [noticias, setNoticias] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const refrescar = (e) => setNoticias(e);

    const verCategoria = (id) => {
      const categoria = categorias.filter(e => e.id === id);
      return (categoria.length > 0) ? categoria[0].nombreCategoria : "";
    }

    const verVisible = (visible) => {
      return visible === 1 ? "si" : "no"
    }

    const verFecha = (fecha) => {
      const date = new Date(fecha);
      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    const verHora = (fecha) => {
      const date = new Date(fecha);
      return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }

    const editar = (noticia) => {
      setNoticiaEdit(noticia);
    }

    const eliminar = (id) => {
      noticiaService.setNoticiaDelete({ id: id }, e => {
        if (e.error) return console.log(e.mensaje);
        setNoticias(e.data);
      })
    }

    useEffect(() => {
      //obtener categorias
      categoriaService.getCategorias(e => {
        if (e.error) return console.log(e.mensaje);
        setCategorias(e.data);
        //obtener noticias
        noticiaService.getNoticias(e2 => {
          if (e2.error) return console.log(e2.mensaje);
          setNoticias(e2.data);
        })
      })
    }, [])

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={img1} alt={img1} width="30px" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Noticias</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="text-center">ADMINISTRADOR DE NOTICIAS</h1>
        <div className="container">
          <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#modalguardar">Agregar</button>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre noticia</th>
                <th scope="col">Descripcion</th>
                <th scope="col">nombrePeriodista</th>
                <th scope="col">visible</th>
                <th scope="col">fechaCreacion</th>
                <th scope="col">categoria</th>
                <th scope="col">horaNoticia</th>
                <th scope="col">imgNoticia</th>
                <th scope="col">resumen</th>
                <th scope="col">acciones</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((noticia, i) => (
                <tr key={"noticia-" + i}>
                  <th scope="row">{noticia.id}</th>
                  <td>{noticia.nombreNoticia}</td>
                  <td>{noticia.descripcion}</td>
                  <td>{noticia.nombrePeriodista}</td>
                  <td>{verVisible(noticia.visible)}</td>
                  <td>{verFecha(noticia.fechaCreacion)}</td>
                  <td>{verCategoria(noticia.idCategoria)}</td>
                  <td>{verHora(noticia.fechaCreacion)}</td>
                  <td>{noticia.imgNoticia}</td>
                  <td>{noticia.resumen}</td>
                  <td>
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#modalActualizar" onClick={() => editar(noticia)}>Actualizar</button>
                    <button type="button" className="btn btn-danger" onClick={() => eliminar(noticia.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Modal Crear*/}
        <NuevaNoticia refrescar={refrescar} categorias={categorias}/>
        {/* Modal Actualizar*/}
        <EditarNoticia noticia={noticiaEdit} refrescar={refrescar} categorias={categorias}/>
      </div>
    )
}

export default Admin