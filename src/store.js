import {createStore,applyMiddleware,compose} from 'redux';

// Redux setup -----store  here thunk is middleware , initial stage is for store 
import thunk from 'redux-thunk';

import rootReducer from './reducer';


const initialState={};
const middleware=[thunk];

// creating store 
const store=createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;