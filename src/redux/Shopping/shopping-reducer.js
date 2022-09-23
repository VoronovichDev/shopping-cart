import * as actionTypes from './shopping-types'
import dumbbells from "../../img/dumbbells.jpg"
import barbell from "../../img/barbell.jpg"
import horizontal_bar from "../../img/horizontal_bar.jpg"
import home_bars from "../../img/home_bars.jpg"
import kettlebell from "../../img/kettlebell.jpg"
import hand_trainer from "../../img/hand_trainer.jpg"
import treadmill from "../../img/treadmill.jpg"
import { createReducer } from '@reduxjs/toolkit'
//==========
import * as actions from './shopping-actions'
const INITIAL_STATE = {
   products: [
      {
         id: 1,
         title: "Dumbbells",
         description: "After purchase, try not only to admire them, but also use",
         price: 45.0,
         image: dumbbells
      },

      {
         id: 2,
         title: "Kettlebell",
         description: "Heavy metal ball",
         price: 20.0,
         image: kettlebell
      },

      {
         id: 3,
         title: "Horizontal bar",
         description: "Looks like an extremely useful and multifunctional thing. But usually used for pull-ups",
         price: 70.0,
         image: horizontal_bar
      },

      {
         id: 4,
         title: "Home bars",
         description: "This thing allows you to either do push-ups or dry clothes",
         price: 30.0,
         image: home_bars
      },

      {
         id: 5,
         title: "Barbell",
         description: "Something like a dumbbell, but bigger and heavier",
         price: 90.0,
         image: barbell
      },

      {
         id: 6,
         title: "Hand trainer",
         description: "With the hand trainer you can train your hands",
         price: 15.0,
         image: hand_trainer
      },
      {
         id: 7,
         title: "Treadmill",
         description: "It costs more than the entire assortment of the store. We highly recommend that you purchase this extreamly useful trainer.",
         price: 980.0,
         image: treadmill
      },

   ],
   cart: [],
   currentItem: null
}

const shopReducerToolKit = createReducer(INITIAL_STATE, {
   [actions.addToCart]: (state, action) => {

      const item = state.products.find(prod => prod.id === action.payload.id)

      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

      state.cart = inCart
         ? state.cart.map(item => item.id === action.payload.id
            ? { ...item, qty: +item.qty + 1 }
            : item)
         : [...state.cart, { ...item, qty: 1 }]

   },
   [actions.removeFromCart]: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
   },
   [actions.editQuantity]: (state, action) => {
      state.cart =
         state.cart.map(item => item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty <= 0 || action.payload.qty === '' ? '' : +action.payload.qty }
            : item)
   },
   [actions.loadCurrentItem]: (state, action) => {
      state.currentItem = action.payload
   },
})

// const shopReducer = (state = INITIAL_STATE, action) => {
//    switch (action.type) {
//       case actionTypes.ADD_TO_CART:

//          //Get the item's data from the products array
//          const item = state.products.find(prod => prod.id === action.payload.id)

//          // Check if the item is already in cart
//          const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

//          return {
//             ...state,
//             cart: inCart
//                ? state.cart.map(item => item.id === action.payload.id
//                   ? { ...item, qty: +item.qty + 1 }
//                   : item)
//                : [...state.cart, { ...item, qty: 1 }]
//          }
//       case actionTypes.REMOVE_FROM_CART:
//          return {
//             ...state,
//             cart: state.cart.filter(item => item.id !== action.payload.id),
//          }
//       case actionTypes.EDIT_QUANTITY:
//          return {
//             ...state,
//             cart:
//                state.cart.map(item => item.id === action.payload.id
//                   ? { ...item, qty: +action.payload.qty <= 0 || action.payload.qty === '' ? '' : +action.payload.qty }
//                   : item)
//          }
//       case actionTypes.LOAD_CURRENT_ITEM:
//          return {
//             ...state,
//             currentItem: action.payload
//          }
//       default:
//          return state
//    }
// }

export default shopReducerToolKit