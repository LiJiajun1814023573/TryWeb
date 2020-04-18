import  {uniqueRedux, combineReducers} from './redux/redux.js'
import rootReducer from './reducer/index.js'

let Store = uniqueRedux.createStore(rootReducer)
export default Store