import { createStore } from 'redux';
import allReducers from '../reducers/index'

export default function rootReducer() {
    createStore(allReducers);
}


