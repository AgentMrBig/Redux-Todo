import { combineReducers } from 'redux'
import TodoReducer from './reducer-todo';

export default function allReducers() {
    combineReducers({
        todos: TodoReducer
    })
}



