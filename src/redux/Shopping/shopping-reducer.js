import * as actionTypes from './shopping-types'
import dumbbells from "../../img/dumbbells.jpg"
import barbell from "../../img/barbell.jpg"
import horizontal_bar from "../../img/horizontal_bar.jpg"
import home_bars from "../../img/home_bars.jpg"
import kettlebell from "../../img/kettlebell.jpg"
import hand_trainer from "../../img/hand_trainer.jpg"
import treadmill from "../../img/treadmill.jpg"

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
         title: "Barbell",
         description: "Something like a dumbbell, but bigger and heavier",
         price: 90.0,
         image: barbell
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
         title: "Kettlebell",
         description: "Heavy metal ball",
         price: 20.0,
         image: kettlebell
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
         title: "Hand trainer",
         description: "It costs more than the entire assortment of the store. We highly recommend that you purchase this extreamly useful trainer.",
         price: 980.0,
         image: treadmill
      },

   ],
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