import Service from "./service";

class UsuarioService extends Service {
    //url
    urlDefault = 'usuarios';
    //servicios
    getLogin = (data, callback) => {
        this.postUse(`${this.urlDefault}/login`, data, callback)
    }
    setUsuario = (data, callback) => {
        this.postUse(`${this.urlDefault}/guardar`, data, callback)
    }
}
export default new UsuarioService();