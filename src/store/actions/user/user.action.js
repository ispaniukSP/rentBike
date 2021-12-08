import axios from "axios"

const getUserRequest = () => ({
    type: "GET_USERS_REQUEST"
})
const getUserSuccess = (payload) => ({
    type: "GET_USERS_SUCCESS",
    payload: {
        ...payload
    }
})
const getUserFailure = (error) =>({
    type: "GET_USERS_FAILURE",
    payload:{
        ...error?.response?.data
    }
})

export const getUserLogin = (values) => async dispatch => {
    try{
        dispatch(getUserRequest())
        const { data } = await axios.post('http://localhost:3002/login', values)
        dispatch(getUserSuccess(data))
    }catch(err){
        dispatch(getUserFailure(err))
    }
}

export const getUserRegister = (values) => async dispatch => {
    try{
        dispatch(getUserRequest())
        const userExist = await axios.post('http://localhost:3002/register', values)
        await axios.post('http://localhost:3002/users', values)
        dispatch(getUserSuccess(userExist.data))
    }catch(err){
        dispatch(getUserFailure(err))
    }
}
