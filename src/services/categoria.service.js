import Service from "./service";

class CategoriaService extends Service {
    //url
    urlDefault = 'categorias';
    //servicios
    getCategorias = (callback) => {
        this.postUse(`${this.urlDefault}`, {}, callback)
    }
}
export default new CategoriaService();