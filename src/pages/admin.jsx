import React from 'react'
import img1 from '../Img/favicon.jpg';

const admin = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={img1} alt={img1} width="30px" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Noticias</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="text-center">ADMINISTRADOR DE NOTICIAS</h1>
        <div className="container">
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar</button>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre noticia</th>
                <th scope="col">Descripcion</th>
                <th scope="col">nombrePeriodista</th>
                <th scope="col">visible</th>
                <th scope="col">fechaCreacion</th>
                <th scope="col">idCategoria</th>
                <th scope="col">horaNoticia</th>
                <th scope="col">imgNoticia</th>
                <th scope="col">resumen</th>
                <th scope="col">acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>
                  <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Actualizar</button>
                  <button type="button" className="btn btn-danger">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Modal Crear*/}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Añadir noticia</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="Nombre" className="form-label">Nombre noticia</label>
                    <input type="text" className="form-control" id="Nombre" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">nombrePeriodista</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputCity" className="form-label">visible</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">fechaCreacion</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                  </div>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">horaNoticia</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Imagen</label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">resumen</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Guardar</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Actualizar*/}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Actualizar noticia</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="Nombre" className="form-label">Nombre noticia</label>
                    <input type="text" className="form-control" id="Nombre" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">nombrePeriodista</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputCity" className="form-label">visible</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">fechaCreacion</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                  </div>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">horaNoticia</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Imagen</label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">resumen</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Guardar</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default admin
