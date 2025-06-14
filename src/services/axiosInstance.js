import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '/api/v1/users',
})


export { axiosInstance }