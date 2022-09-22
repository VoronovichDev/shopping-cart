import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
   products: [],
   cart: [],
   currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case actionTypes.ADD_TO_CART:
         return {}
      case actionTypes.REMOVE_FROM_CART:
         return {}
      case actionTypes.EDIT_QUANTITY:
         return {}
      case actionTypes.LOAD_CURRENT_ITEM:
         return {}
      default:
         return state
   }
}

export default shopReducer