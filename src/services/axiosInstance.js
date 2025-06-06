import axios from "axios";

const instance = axios.create({
    baseURL: '/api/v1/users',
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})

export default instance