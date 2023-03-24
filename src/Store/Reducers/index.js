import counterReducer from "./Counter";
import loggedInReducer from "./IsLoggedIn";
import { combineReducers } from "redux";
import appNameReducer from "./AppNameReducer";

const allReducers = combineReducers(
    {
        counter: counterReducer,
        isLoggedIn: loggedInReducer,
        appName: appNameReducer
    }
);

export default allReducers;