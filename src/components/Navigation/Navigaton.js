import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss"
import cart from './../../img/cart.svg'


const Navigation = () => {
   return (
      <div className={s.nav}>
         <Link to="/">
            <h2 className={s.nav_logo}>SHOPPING CART</h2>
         </Link>
         <Link to="/cart">
            <div className={s.nav_cart}>
               <h3 className={s.cart_title}>Cart</h3>
               <img
                  className={s.cart_img}
                  src={cart}
                  alt="shopping cart"
               />
               <div className={s.cart_count}>1</div>
            </div>
         </Link>
      </div>
   )
}

export default Navigation