import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import logo from '../Img/logo.png';

import { usuarioService } from '../services';

const Login = () => {
    const history = useHistory();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        const datos = {
          username: usuario,
          password: password,
        }
        usuarioService.getLogin(datos, e => {
          if (e.error) return alert('no se puede iniciar sesion');
          if (e.data.length > 0) history.push('/adminnews');
          else alert('no se puede iniciar sesion')
        })

    }

    return (
        <div className="card box">
        <img src={ logo } alt={ logo } className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Iniciar Sesion</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="usuario" aria-describedby="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="Password1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="Password1" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2">
              <button type="button" onClick={signIn} className="btn btn-danger">Ingresar</button>
            </div>
            <a href="#" className="card-link">¿Olvidaste tu cuenta?</a>
            <br /><br />
            <div className="d-grid gap-2">
              <a href="/signup" className="btn btn-dark">Crear cuenta nueva</a>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login