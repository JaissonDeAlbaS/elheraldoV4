import React from 'react'
import logo from '../Img/logo.png';
const signup = () => {
    return (
        <div className="card box">
        <img src={ logo } alt={ logo } className="card-img-top" />         
        <div className="card-body">
          <h5 className="card-title">Registrarse</h5>
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="Nombre" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="Nombre" />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label">Direccion</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">Telefono</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputCity" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>

            <div className="d-grid gap-2">
              <a href="#" className="btn btn-danger">Registrarse</a>
            </div>
            
            <a href="login.html" className="card-link">iniciar sesion</a>
          </form>
        </div>
      </div>
    )
}

export default signup