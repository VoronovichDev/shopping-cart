import * as acitonTypes from './shopping-types'
import { createAction } from '@reduxjs/toolkit'

// export const addToCart = (itemID) => {
//    return {
//       type: acitonTypes.ADD_TO_CART,
//       payload: {
//          id: itemID
//       }
//    }
// }
export const addToCart = createAction("ADD_TO_CART", (itemID) => {
   return {
      payload: {
         id: itemID
      }
   }
})


// export const removeFromCart = (itemID) => {
//    return {
//       type: acitonTypes.REMOVE_FROM_CART,
//       payload: {
//          id: itemID
//       }
//    }
// }
export const removeFromCart = createAction("REMOVE_FROM_CART", (itemID) => {
   return {
      payload: {
         id: itemID
      }
   }
})

// export const editQuantity = (itemId, value) => {
//    return {
//       type: acitonTypes.EDIT_QUANTITY,
//       payload: {
//          id: itemId,
//          qty: value,
//       }
//    }
// }
export const editQuantity = createAction("EDIT_QUANTITY", (itemId, value) => {
   return {
      payload: {
         id: itemId,
         qty: value,
      }
   }
})

// export const loadCurrentItem = (item) => {
//    return {
//       type: acitonTypes.LOAD_CURRENT_ITEM,
//       payload: item
//    };
// }
export const loadCurrentItem = createAction("LOAD_CURRENT_ITEM", (item) => {
   return {
      payload: item
   }
})