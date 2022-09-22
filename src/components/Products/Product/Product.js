import React from "react";
import { Link } from "react-router-dom";
import s from "./Product.module.scss";
import testImg from '../../../img/test-img.jpg'


const Product = () => {
   return (
      <div className={s.prod}>
         <img className={s.prod_img} src={testImg} alt="t-shirt" />

         <div className={s.prod_info}>
            <p className={s.info_title}>T-shirt</p>
            <p className={s.info_desc}>Nice t-shirt - some text for description. Nice t-shirt - some text for description. Nice t-shirt - some text for description.</p>
            <p className={s.info_price}>$ 10.00</p>
         </div>

         <div className={s.prod_btns}>
            <Link to={`/product/111`}>
               <button className={`${s.btns_btn} ${s.btns_view}`}>
                  View Item
               </button>
            </Link>
            <button className={`${s.btns_btn} ${s.btns_add}`}>
               Add To Cart
            </button>
         </div>
      </div>
   );
};

export default Product;