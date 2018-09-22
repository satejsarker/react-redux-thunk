import {combineReducers} from 'redux';

import contactReducer from './contactReducer';


// alll the reducer we want to apply in react 
export default combineReducers({
    contact: contactReducer
})
