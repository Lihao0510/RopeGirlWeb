import {createStore, compose, applyMiddleware} from "redux";
import reducer from '../reducer';
import thunk from 'redux-thunk';

export default (initialState, options) => {
    console.log('InitStore ==>', initialState, options);
    return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunk)));
};