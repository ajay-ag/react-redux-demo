import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import tabReducer from './tab'
import textReducer from './textbox'
import selectReducer from './selectbox'
import checkboxReducer from './checkbox'
import postDataReducer from './post'

export const reducers = combineReducers({
    activeTab: tabReducer,
    textfield: textReducer,
    slectbox: selectReducer,
    checkedValue: checkboxReducer,
    postdata: postDataReducer
});

console.log(reducers);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store.js
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));