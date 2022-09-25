import React, { useState } from "react";
import s from './CartItem.module.scss';
import deleteBtn from '../../../img/delete.svg'
import { useDispatch } from "react-redux";
import { removeFromCart, editQuantity } from "../../../redux/Shopping/shopping-slice";

const CartItem = ({ itemData }) => {

   const dispatch = useDispatch()
   const id = itemData.id

   const [input, setInput] = useState(itemData.qty)

   const onQtyChange = (e) => {

      setInput(+e.target.value <= 0 || e.target.value === '' ? '' : +e.target.value)
      dispatch(editQuantity({ id, qty: e.target.value }))
   }
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
               <input
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={input}
                  onChange={onQtyChange} />
            </div>
            <button
               className={s.ctrl_deleteBtn}
               onClick={() => dispatch(removeFromCart({ id }))}>
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