import axios from "../axios"

const handleLoginApi = (email, password) => {
    // { email, password } la 1 cach viet tat cua object khi ma key va value cung ten
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (id) => {
    // template string
    return axios.get(`/api/get-all-users?id=${id}`, { id })
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    // console.log(data)
    return axios.post(`/api/save-info-doctor`, data)
}

const getDetailInfoDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data)
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctorService,
    getDetailInfoDoctor,
    saveBulkScheduleDoctor,
    getScheduleDoctorByDate
}