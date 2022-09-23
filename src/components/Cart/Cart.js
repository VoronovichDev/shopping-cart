import React from "react";
import s from './Cart.module.scss'
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";


const Cart = ({ cart }) => {
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

const mapStateToProps = state => {
   return {
      cart: state.shop.cart
   }
}

export default connect(mapStateToProps)(Cart)