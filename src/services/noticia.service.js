import Service from "./service";

class NoticiaService extends Service {
    //url
    urlDefault = 'noticias';
    //servicios
    getNoticias = (callback) => {
        this.postUse(`${this.urlDefault}`, {}, callback)
    }
    getNoticiasVisibles = (callback) => {
        this.postUse(`${this.urlDefault}/visibles`, {}, callback)
    }
    setNoticia = (datos, callback) => {
        this.postUse(`${this.urlDefault}/guardar`, datos, callback)
    }
    setNoticiaUpdate = (datos, callback) => {
        this.postUse(`${this.urlDefault}/editar`, datos, callback)
    }
    setNoticiaDelete = (datos, callback) => {
        this.postUse(`${this.urlDefault}/eliminar`, datos, callback)
    }
}
export default new NoticiaService();