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
      <div className={s.cart}>
         <div className={s.cart_item}>
            <CartItem key={item.id} item={item} />
         </div>
         <div className={s.cart_sum}>
            <h4 className={s.sum_title}>Cart Summary</h4>
            <div className={s.sum_price}>
               <span>
                  TOTAL: (1 item)
               </span>
               <span>$ 10.00</span>
            </div>
            <button className={s.sum_btn}>
               Proceed To Checkout
            </button>
         </div>
      </div>
   )
}

export default Cart