import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import app from './app-reducer';

let reducers = combineReducers({
   app,
   form: formReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
