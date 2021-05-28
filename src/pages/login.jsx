import React from 'react'
import logo from '../Img/logo.png';
const login = () => {
    return (
        <div className="card box">
        <img src={ logo } alt={ logo } className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Iniciar Sesion</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="Email1" className="form-label">Correo electronico</label>
              <input type="email" className="form-control" id="Email1" aria-describedby="email" />
              <div id="email" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="Password1" />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-danger">Ingresar</button>
            </div>
            <a href="#" className="card-link">¿Olvidaste tu cuenta?</a>
            <br /><br />
            <div className="d-grid gap-2">
              <a href="signup.html" className="btn btn-dark">Crear cuenta nueva</a>
            </div>
          </form>
        </div>
      </div>
    )
}

export default login