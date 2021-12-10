import {combineReducers} from "redux";
import user from "./user.reducer/user"
import city from "./city.reducer/city"
import center from "./center.reducer/center"
const reducers = combineReducers({
    user,
    city,
    center,
})

export default reducers