import React from "react";
import s from './CartItem.module.scss';
import deleteBtn from '../../../img/delete.svg'
import tshirt from '../../../img/test-img.jpg'

const CartItem = ({ itemData }) => {
   return (
      <div className={s.item}>
         <img
            className={s.item_img}
            src={itemData.image}
            alt={itemData.title} />

         <div className={s.item_info}>
            <p className={s.info_title}>{itemData.title}</p>
            <p className={s.info_desc}>{itemData.description}</p>
            <p className={s.info_price}>$ {itemData.price}</p>
         </div>

         <div className={s.item_ctrl}>
            <div className={s.item_qty}>
               <label htmlFor="qty">Quantity</label>
               <input min="1" type="number" id="qty" name="qty" value={itemData.qty} />
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