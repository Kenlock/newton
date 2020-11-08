import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/'


export default{

    get(url){   
        return axios.get(url);
    },

    post(url,data){
        return axios.post(url,data)
    }

}