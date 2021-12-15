import instance from '../../../api';

const getCitiesRequest = () => ({
    type: "GET_CITIES_REQUEST",
})

const getCitiesSuccess = (payload) => ({
    type: "GET_CITIES_SUCCESS",
    payload: [
        ...payload
    ]
})

const getCitiesFailure = (error) => ({
    type: "GET_CITIES_FAILURE",
    payload:{
        ...error,
    }
})

export const getCities = () => async dispatch => {
    try{
        dispatch(getCitiesRequest());
        const cityResponse = await instance.get('/cities');
        console.log("cityResponse",cityResponse)
        dispatch(getCitiesSuccess(cityResponse.data));
    }catch(err){
        dispatch(getCitiesFailure(err.response)); 
    }
}

const getCurrentCityRequest = () => ({
    type: "GET_CURRENT_CITY_REQUEST",
})

const getCurrentCitySuccess = (payload) => ({
    type: "GET_CURRENT_CITY_SUCCESS",
    payload: {
        ...payload
    }
})

const getCurrentCityFailure = (error) => ({
    type: "GET_CURRENT_CITY_FAILURE",
    payload:{
        ...error,
    }
})

export const getCurrentCity = (cityId) => async dispatch => {
    try{
        dispatch(getCurrentCityRequest())
        const { data } = await instance.get(`/cities/${cityId}`)
        dispatch(getCurrentCitySuccess(data))
    }catch(err){
        console.log(err)
        dispatch(getCurrentCityFailure(err))
    }
}