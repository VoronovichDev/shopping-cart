import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss"
import cartLogo from './../../img/cart.svg'

import { useSelector } from "react-redux";


const Navigation = () => {

   const cart = useSelector(state => state.shop.cart)

   const [cartCount, setCartCount] = useState(0)

   useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
         count += item.qty
      })

      setCartCount(count)
   }, [cart, cartCount])

   return (
      <div className={s.nav}>
         <Link to="/">
            <h2 className={s.nav_logo}>HOMEMADE GYM</h2>
         </Link>
         <Link to="/cart">
            <div className={s.nav_cart}>
               <h3 className={s.cart_title}>Cart</h3>
               <img
                  className={s.cart_img}
                  src={cartLogo}
                  alt="shopping cart"
               />
               <div className={s.cart_count}>{cartCount}</div>
            </div>
         </Link>
      </div>
   )
}

export default Navigation;