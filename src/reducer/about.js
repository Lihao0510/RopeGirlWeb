import {handleActions} from 'redux-actions';

const initialState = {
    whatTheFuck: 'Fuck You',
    success: false
};

const adReducer = handleActions({
    aboutTest1: (state, action) => {
        return {
            ...state,
            whatTheFuck: action.payload,
            success: true
        }
    },
    aboutTest2: (state, action) => {
        return initialState;
    }
}, initialState);

export default adReducer;