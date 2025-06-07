import axios from "axios";

const registerInstance = axios.create({
    baseURL: '/api/v1/users',
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})
const loginInstance = axios.create({
    baseURL: '/api/v1/users',
    headers: {
        "Content-Type": 'application/json'
    }
})

export { registerInstance, loginInstance }