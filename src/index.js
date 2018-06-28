import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // Makes development easier

const custReducer = (state = [], action) => {
    if(action.type === 'ADD_CUST') {
        state = action.payload;
    }
    return state;
};

<<<<<<< HEAD
const cartReducer = (state = {}, action) => {
=======
const cartReducer = (state = [], action) => {
>>>>>>> 4d9d38e5b9285a324dc84df79e2d2e70dff86e47
    if(action.type === 'ADD_ORDER') {
        console.log('in ADD_ORDER');
        
    } else if(action.type === 'UPDATE_TOTAL') {
        console.log('in UPDATE_TOTAL');
        
    }
    return state;
<<<<<<< HEAD
}
=======
};
>>>>>>> 4d9d38e5b9285a324dc84df79e2d2e70dff86e47

const storeInstance = createStore(
    combineReducers({
        custReducer,
        cartReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render( <Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
