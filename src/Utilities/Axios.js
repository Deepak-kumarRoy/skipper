import axios from "axios";

axios.defaults.withCredentials = true;

const Axios = {
    GET: (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    POST: (url, body) => {
        return new Promise((resolve, reject) => {
            axios.post(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    PUT: (url, body) => {
        return new Promise((resolve, reject) => {
            axios.put(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    DELETE: (url, body) => {
        return new Promise((resolve, reject) => {
            axios.delete(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

export default Axios;
