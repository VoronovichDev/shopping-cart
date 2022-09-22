import * as acitonTypes from './shopping-types'

export const addToCard = (itemID) => {
   return {
      type: acitonTypes.ADD_TO_CART,
      payload: {
         id: itemID
      }
   }
}

export const removeFromCart = (itemID) => {
   return {
      type: acitonTypes.REMOVE_FROM_CART,
      payload: {
         id: itemID
      }
   }
}

export const editQuantity = (itemId, value) => {
   return {
      type: acitonTypes.EDIT_QUANTITY,
      payload: {
         id: itemId,
         qty: value,
      }
   }
}

export const loadCurrentItem = (item) => {
   return {
      type: acitonTypes.LOAD_CURRENT_ITEM,
      payload: item
   };
}