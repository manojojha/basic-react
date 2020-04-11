import CounterReducer from './counter';
import  LoggedInReducer from './isLoggedIn'

import { combineReducers} from 'redux';

const AllReducers = combineReducers( {
    counter: CounterReducer,
    loggedin: LoggedInReducer
})

export default AllReducers;