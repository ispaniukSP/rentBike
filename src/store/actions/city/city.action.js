import axios from 'axios';

const getCityRequest = () => ({
    type: "GET_CITIES_REQUEST",
})

const getCitySuccess = (payload) => ({
    type: "GET_CITIES_SUCCESS",
    payload: [
        ...payload
    ]
})

const getCityFailure = (error) => ({
    type: "GET_CITIES_FAILURE",
    payload:{
        ...error,
    }
})

export const getCity = () => async dispatch => {
    try{
        dispatch(getCityRequest());
        const { data } = await axios.get('http://localhost:3002/cities');
        dispatch(getCitySuccess(data));
    }catch(err){
        dispatch(getCityFailure(err)); 
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
        const { data } = await axios.get(`http://localhost:3002/cities/${cityId}`)
        dispatch(getCurrentCitySuccess(data))
    }catch(err){
        console.log(err)
        dispatch(getCurrentCityFailure(err))
    }
}