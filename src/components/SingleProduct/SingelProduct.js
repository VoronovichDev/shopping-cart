import React from "react";
import s from './SingleProduct.module.scss'

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-slice";

const SingelProduct = () => {

   const dispatch = useDispatch()

   const currentItem = useSelector(state => state.shop.currentItem)
   const id = currentItem.id

   return (
      <div className={s.singleProd}>
         <img
            className={s.singleProd_img}
            src={currentItem.image}
            alt={currentItem.title} />
         <div className={s.singleProd_info}>
            <p className={s.info_title}>{currentItem.title}</p>
            <p className={s.info_desc}>{currentItem.description}</p>
            <p className={s.info_price}>$ {currentItem.price}</p>

            <button
               onClick={() => dispatch(addToCart({ id }))}
               className={s.info_addBtn}>Add To Cart</button>
         </div>
      </div>
   )
}

export default SingelProduct