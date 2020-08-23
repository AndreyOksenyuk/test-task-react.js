import { combineReducers, createStore } from "redux";
import app from './app-reducer';

let reducers = combineReducers({
   app,
})

export let store = createStore(reducers)
