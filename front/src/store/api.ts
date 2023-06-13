import axios, { AxiosInstance } from "axios";

const BACKEND_URL = "http://158.160.52.192:8000/backend";
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT
    });

    return api;
}