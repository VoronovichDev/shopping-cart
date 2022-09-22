import React from "react";
import s from './CartItem.module.scss';
import deleteBtn from '../../../img/delete.svg'

const CartItem = ({ item }) => {
   return (
      <div className={s.item}>
         <img
            className={s.item_img}
            src={item.image}
            alt={item.title} />

         <div className={s.item_info}>
            <p className={s.info_title}>{item.title}</p>
            <p className={s.info_desc}>Nice t-shirt - some text for description. Nice t-shirt - some text for description. Nice t-shirt - some text for description</p>
            <p className={s.info_price}>$ 10.00</p>
         </div>

         <div className={s.item_ctrl}>
            <div className={s.item_qty}>
               <label htmlFor="qty">Quantity</label>
               <input min="1" type="number" id="qty" name="qty" value="1" />
            </div>
            <button className={s.ctrl_deleteBtn}>
               <img
                  src={deleteBtn}
                  alt="delete item button"
               />
            </button>
         </div>
      </div >
   )
}

export default CartItem