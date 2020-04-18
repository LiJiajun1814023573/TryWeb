import {uniqueRedux,combineReducers} from '../redux/redux.js'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'

const rootReducer = combineReducers({
    todos,
    visibilityFilter
})

export default rootReducer