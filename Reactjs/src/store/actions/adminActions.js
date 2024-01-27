import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService } from '../../services/userService';
import { toast } from "react-toastify";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("gender");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService("position");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
        }
    }
}

export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService("role");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    }
}

export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('Check create: ', res)
            if (res && res.errCode === 0) {
                toast.success("Create a new user successfully!");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
        }
    }
}

export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})

export const fetchAllUsersStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch all users error!")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Fetch all users error!")
            dispatch(fetchAllUsersFailed());
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})

export const deleteAUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log('Check create: ', res)
            if (res && res.errCode === 0) {
                toast.success("Delete the user successfully!");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete the user failed!");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete the user failed!");
            dispatch(deleteUserFailed());
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editAUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            // console.log('Check create: ', res)
            if (res && res.errCode === 0) {
                toast.success("Update the user successfully!");
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update the user failed!");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update the user failed!");
            dispatch(editUserFailed());
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

export const fetchTopDoctor = () => {
    return async(dispatch, getState) => {
        try {
            let response = await getTopDoctorHomeService('10');
            if (response && response.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: response.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })
        }
    }
}

export const fetchAllDoctors = () => {
    return async(dispatch, getState) => {
        try {
            let response = await getAllDoctors();
            if (response && response.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDrs: response.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async(dispatch, getState) => {
        try {
            let response = await saveDetailDoctorService(data);
            if (response && response.errCode === 0) {
                toast.success("Save info doctor successfully");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Save info doctor failed!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            toast.error("Save info doctor failed!");
            console.log('SAVE_DETAIL_DOCTOR_FAILED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async(dispatch, getState) => {
        try {
            let response = await getAllCodeService("TIME");
            if (response && response.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: response.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
            })
        }
    }
}


// let res1 = await getTopDoctorHomeService(3);
// console.log('check nodejs: ', res1);