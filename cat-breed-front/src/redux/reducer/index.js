import {  combineReducers} from "redux";
import loginReducer from "./loginReducer";
import tokenReducer from "./tokenReducer";
import userInfoReducer from "./userInfoReducer";


const rootReducers =combineReducers({
    login: loginReducer,
    token: tokenReducer,
    user:userInfoReducer,
});
export default rootReducers;