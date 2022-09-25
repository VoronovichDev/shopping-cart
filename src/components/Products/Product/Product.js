import React from "react";
import { Link } from "react-router-dom";
import s from "./Product.module.scss";

import { useDispatch } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../../redux/Shopping/shopping-slice'

const Product = ({ productData }) => {

   const dispatch = useDispatch()
   const id = productData.id

   return (
      <div className={s.prod}>
         <img className={s.prod_img} src={productData.image} alt={productData.title} />

         <div className={s.prod_info}>
            <p className={s.info_title}>{productData.title}</p>
            <p className={s.info_desc}>{productData.description}</p>
            <p className={s.info_price}>$ {productData.price}</p>
         </div>

         <div className={s.prod_btns}>
            <Link to={`/product/${id}`}>
               <button
                  onClick={() => dispatch(loadCurrentItem(productData))}
                  className={`${s.btns_btn} ${s.btns_view}`}>
                  View Item
               </button>
            </Link>
            <button onClick={() => dispatch(addToCart({ id }))} className={`${s.btns_btn} ${s.btns_add}`}>
               Add To Cart
            </button>
         </div>
      </div>
   );
};

export default Product;