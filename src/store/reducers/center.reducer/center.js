import centerType from "../../actions/center/center.type"

const initialState = {
    centers: null,
    currentCenter: null,
    loader: false,
    error: null,
}

export default (state = initialState, {type, payload, ...action}) => {
    switch(type){
        case centerType.GET_CENTERS_ID_REQUEST:
            return {...state, loader: true}
        case centerType.GET_CENTERS_ID_SUCCESS:
            return {...state, centers: payload, loader: false}
        case centerType.GET_CENTERS_ID_FAILURE:
            return {...state, error: payload, loader: false}
        case centerType.GET_CURRENT_CENTER_REQUEST:
            return {...state, currentCenter: null, loader: true}
        case centerType.GET_CURRENT_CENTER_SUCCESS:
            return {...state, currentCenter: payload, loader: false}
        case centerType.GET_CURRENT_CENTER_FAILURE:
            return {...state, error: payload, loader: false}
        default:
            return state
    }
}