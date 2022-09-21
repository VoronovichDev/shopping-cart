import React from "react";
import s from './CartItem.module.scss';
import deleteBtn from '../../../img/delete.svg'

const CartItem = ({ item }) => {
   return (
      <div>
         <img
            src={item.image}
            alt={item.title} />

         <div>
            <p>{item.title}</p>
            <p>Description</p>
            <p>$ 10.00</p>
         </div>

         <div>
            <div>
               <label htmlFor="qty ">Quantity</label>
               <input min="1" type="number" id="qty" name="qty" value="1" />
            </div>
            <button>
               <img
                  src={deleteBtn}
                  alt=""
               />
            </button>
         </div>
      </div>
   )
}

export default CartItem