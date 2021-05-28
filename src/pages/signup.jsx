import React, { useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../Img/logo.png';

import { usuarioService } from '../services';

const Signup = () => {
  const history = useHistory();

    const registrar = () => {
      const datos = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        username: usuario,
        password: clave,
        email: email,
      }
      usuarioService.setUsuario(datos, e => {
        if (e.error) return console.log(e.mensaje);
        history.push("/login")
      })
    }

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    
    return (
        <div className="card box">
        <img src={ logo } alt={ logo } className="card-img-top" />         
        <div className="card-body">
          <h5 className="card-title">Registrarse</h5>
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="Nombre" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            </div>
            <div className="col-6">
              <label htmlFor="direccion" className="form-label">Direccion</label>
              <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e)=>setDireccion(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label htmlFor="telefono" className="form-label">Telefono</label>
              <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
            </div>
            <div className="col-md-12">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label htmlFor="clave" className="form-label">Password</label>
              <input type="password" className="form-control" id="clave" value={clave} onChange={(e)=>setClave(e.target.value)} />
            </div>

            <div className="d-grid gap-2">
              <button type="button" className="btn btn-danger" onClick={registrar}>Registrarse</button>
            </div>
            
            <a href="/login" className="card-link">iniciar sesion</a>
          </form>
        </div>
      </div>
    )
}

export default Signup