import React from "react";
import s from './Cart.module.scss'
import testImg from '../../img/test-img.jpg'

import CartItem from "./CartItem/CartItem";

const item = {
   image: testImg,
   title: "T-shirt",
   id: 1
}

const Cart = () => {
   return (
      <div>
         <div>
            <CartItem key={item.id} item={item} />
         </div>
         <div>
            <h4>Cart Summary</h4>
            <div>
               <span>
                  TOTAL: (1 item)
               </span>
               <span>$ 10.00</span>
            </div>
            <button>
               Proceed To Checkout
            </button>
         </div>
      </div>
   )
}

export default Cart