//  at first, create a global store

import {combineReducers, createStore} from 'redux'
import {expenseReducer} from '../reducers/reducer'

const reducer = combineReducers({
    expenses : expenseReducer,

})
const initialState = {};

// createStore takes 2 arguments : reducer and initialState : (if we are not giving middleware)
const store = createStore(reducer, initialState)

export default store;