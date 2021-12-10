import axios from "axios"

const centersRequest = () => ({
    type: "GET_CENTERS_ID_REQUEST",
})

const centersSuccess = (payload) => ({
    type: "GET_CENTERS_ID_SUCCESS",
    payload: payload,
})

const centersFailure = (error) => ({
    type: "GET_CENTERS_ID_FAILURE",
    payload:{
        ...error
    }
})

export const getCenters = (cityId) => async dispatch => {
    try{
        dispatch(centersRequest())
        const { data } = await axios.get(
            `http://localhost:3002/centers?cityId=${cityId}`
        );
        dispatch(centersSuccess(data))
    }catch(err){
        dispatch(centersFailure(err))
    }
}

const currentCenterRequest = () => ({
    type: "GET_CURRENT_CENTER_REQUEST",
})

const currentCentersSuccess = (payload) => ({
    type: "GET_CURRENT_CENTER_SUCCESS",
    payload: payload,
})

const currentCentersFailure = (error) => ({
    type: "GET_CURRENT_CENTER_FAILURE",
    payload:{
        ...error
    }
})

export const getCurrentCenter = (cityId) => async dispatch => {
    try{
        dispatch(currentCenterRequest())
        const { data } = await axios.get(
            `http://localhost:3002/centers/${cityId}`
        );
        dispatch(currentCentersSuccess(data))
    }catch(err){
        dispatch(currentCentersFailure(err))
    }
}