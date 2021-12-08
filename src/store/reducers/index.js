import {combineReducers} from "redux";
import user from "./user.reducer/user"

const reducers = combineReducers({
    user,
})

export default reducers