import cityType from "../../actions/city/city.type"

const initialState = {
    cities: null,
    currentCity: null,
    loader: false,
    error: null,
}

export default (state = initialState, {type, payload, ...action}) => {
    switch(type){
        case cityType.GET_CITIES_REQUEST:
            return {...state, currentCity: null , loader: true, cities: null}
        case cityType.GET_CITIES_SUCCESS:
            return {...state, loader: false, cities: payload}
        case cityType.GET_CITIES_FAILURE:
            return {...state, loader: false, error: payload, cities: null }
        case cityType.GET_CURRENT_CITY_REQUEST:
            return {...state ,loader: true}
        case cityType.GET_CURRENT_CITY_SUCCESS:
            return {...state, loader: false, currentCity: payload}
        case cityType.GET_CURRENT_CITY_FAILURE:
            return {...state, loader: false, error: payload, currentCity: null }
        default:
            return state
    }
}