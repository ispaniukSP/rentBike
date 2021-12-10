import userType from "../../actions/user/user.type"

const initialState = {
    userInfo: null,
    available: false,
    loader: false,
    error: null,
}

export default (state = initialState, {type, payload, ...action}) => {
    switch(type){
        case userType.GET_USERS_REQUEST:
            return { ...state,userInfo: null, error: null, loader: true, available: false}
        case userType.GET_USERS_SUCCESS:
            return {...state,userInfo: payload, loader: false, available: true}
        case userType.GET_USERS_FAILURE:
            return {...state,loader: false, error: payload, available: false}
        default:
            return state
    }
}