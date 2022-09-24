import { combineReducers } from 'redux'
import { shopReducerSlice } from './Shopping/shopping-slice'

const rootReducer = combineReducers({
   shop: shopReducerSlice
})

export default rootReducer