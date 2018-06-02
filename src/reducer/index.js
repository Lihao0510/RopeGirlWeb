import {combineReducers} from "redux";
import about from './about';
import home from './home';

const rootReducer = combineReducers({
    about,
    home
});

export default rootReducer;