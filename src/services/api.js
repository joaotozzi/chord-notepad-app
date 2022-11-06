import axios from "axios";

const api = axios.create({
    baseURL: "https://chord-notepad-api.herokuapp.com/cifras/"
});

export default api;