import axios from "axios";

export const API_URL = " https://gateway.scan-interfax.ru/api/v1"
const $api = axios.create({
    withCredentials: true,
    baseUrl: API_URL,
})