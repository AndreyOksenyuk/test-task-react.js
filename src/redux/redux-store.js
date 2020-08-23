import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import app from './app-reducer';


let reducers = combineReducers({
   app,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
