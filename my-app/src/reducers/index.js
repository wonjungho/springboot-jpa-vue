import {combineReducers} from 'redux'
import todoReducer from './todoReducer'

const shopApp= combineReducers(
    {
        todoReducer:todoReducer
    }
)
export default shopApp