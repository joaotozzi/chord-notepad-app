import axios from "axios";

const api = axios.create({
    baseURL: "http://ec2-3-83-69-203.compute-1.amazonaws.com:8080/cifras/"
});

export default api;