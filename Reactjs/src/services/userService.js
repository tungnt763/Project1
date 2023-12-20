import axios from "../axios"

const handleLoginApi = (email, password) => {
    // { email, password } la 1 cach viet tat cua object khi ma key va value cung ten
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (id) => {
    // template string
    return axios.get(`/api/get-all-users?id=${id}`, { id })
}

export { handleLoginApi, getAllUsers }