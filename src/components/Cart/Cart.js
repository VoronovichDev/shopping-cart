import React, { useState, useEffect } from "react";
import s from './Cart.module.scss'
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = () => {

   const cart = useSelector(state => state.shop.cart)

   const [totalPrice, setTotalPrice] = useState(0)
   const [totalItems, setTotalItems] = useState(0)

   useEffect(() => {

      let items = 0;
      let price = 0;

      cart.forEach(item => {
         items += item.qty
         price += item.qty * item.price
      })

      setTotalPrice(price)
      setTotalItems(items)
   }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems])

   return (
      <div className={s.cart}>
         <div className={s.cart_item}>
            {cart.map(item => (
               <CartItem itemData={item} key={item.id} />
            ))}
         </div>
         <div className={s.cart_sum}>
            <h4 className={s.sum_title}>Cart Summary</h4>
            <div className={s.sum_price}>
               <span>
                  TOTAL: ({totalItems} item)
               </span>
               <span>$ {totalPrice}</span>
            </div>
            <button className={s.sum_btn}>
               Proceed To Checkout
            </button>
         </div>
      </div>
   )
}

export default Cart