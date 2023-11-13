import axios from "axios";

const API_URL = "https://gateway.scan-interfax.ru/api/v1";

var $api = axios.create({
	baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_TOKEN`
    } 
});

$api.interceptors.request.use(function (config) {
	config.headers.Authorization = "Bearer " + localStorage.getItem("token");
	return config;
});

export default $api;