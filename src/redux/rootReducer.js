import { combineReducers } from 'redux'
import shopReducerToolKit from './Shopping/shopping-reducer'

const rootReducer = combineReducers({
   shop: shopReducerToolKit
})

export default rootReducer