import instance from "../../../api"
import tokenService from '../../../api/tokenService';

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

const getUserAccess = (payload) =>({
    type: "GET_USER_ACCESS",
    payload: payload,
}) 

export const getUserLogin = (values) => async dispatch => {
    try{
        dispatch(getUserRequest())
        const { data } = await instance.post('/login', values)
        console.log(data)
        tokenService.setAccessToken(data.accessToken);
        tokenService.setRefreshToken(data.refreshToken);
        dispatch(getUserSuccess(data))
    }catch(err){
        console.log(err)
        dispatch(getUserFailure(err))
    }
}

export const getUserRegister = (values) => async dispatch => {
    try{
        dispatch(getUserRequest())
        const userExist = await instance.post('/register', values)
        await instance.post('/users', values)
        dispatch(getUserSuccess(userExist.data))
    }catch(err){
        dispatch(getUserFailure(err))
    }
}

export const setUserAccess = (access) => async dispatch => {
    dispatch(getUserAccess(access))
}