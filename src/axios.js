import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-52f9c/us-central1/api'
});

export default instance;