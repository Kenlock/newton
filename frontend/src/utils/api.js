import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/";

export default {
    get(url) {
        return axios.get(url);
    },

    post(url, data) {
        return axios.post(url, data);
    },

    put(url, id, data) {
        return axios.put(`${url}/${id}`, data);
    },

    destroy(url, id) {
        return axios.delete(`${url}/${id}`);
    },
};
