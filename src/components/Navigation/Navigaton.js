import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss"
import cart from './../../img/cart.svg'


const Navigation = () => {
   return (
      <div>
         <Link to="/">
            <h2>Shopping Cart</h2>
         </Link>
         <Link to="/cart">
            <div>
               <h3>Cart</h3>
               <img
                  src={cart}
                  alt="shopping cart"
               />
               <div>0</div>
            </div>
         </Link>
      </div>
   )
}

export default Navigation