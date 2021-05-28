import { SERVICE } from "../utils/consts";

class Service {
    token = '';
    //constructor
    constructor() {}
    //obtener cabeceras
    getHeaders = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("authorization", this.token);
        return myHeaders;
    }
    //pasar informacion al body
    getParams = (data) => {
        let params = new URLSearchParams();
        Object.keys(data).forEach(key => params.append(key, (typeof(data[key]) === 'object') ? JSON.stringify(data[key]) : data[key]));
        return params;
    }
    //crear promesa
    newPromise = (url, params) => {
        return new Promise((resolve, reject) => {
            fetch(`${SERVICE}/api/${url}`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: params,
            })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch((error) => reject(error));
        });
    }
    //tipos de peticiones
    //servicio post default
    post = (url, data) => {
        //realizar post
        return this.newPromise(url, this.getParams(data));
    }
    //servicio post para usarse
    postUse = async (url, datos, response) => {
        return response(await this.post(url, datos));
    };
}
export default Service;