import {handleActions} from 'redux-actions';

const initialState = {
    homePageWarn: 'Shit!!',
    success: false
};

const adReducer = handleActions({
    homeTest1: (state, action) => {
        return {
            ...state,
            homePageWarn: action.payload,
            success: true
        }
    },
    homeTest2: (state, action) => {
        return initialState;
    }
}, initialState);

export default adReducer;