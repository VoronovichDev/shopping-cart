import React from "react";
import s from './SingleProduct.module.scss'
import testImg from '../../img/test-img.jpg'

const SingelProduct = () => {
   return (
      <div className={s.singleProd}>
         <img
            className={s.singleProd_img}
            src={testImg}
            alt="T-shirt" />
         <div className={s.singleProd_info}>
            <p className={s.info_title}>T-shirt SINGLE PRODUCT</p>
            <p className={s.info_desc}>Description SINGLE PRODUCT Description SINGLE PRODUCT Description SINGLE PRODUCT Description SINGLE PRODUCT</p>
            <p className={s.info_price}>$ 10.00  SINGLE PRODUCT</p>

            <button className={s.info_addBtn}>Add To Cart</button>
         </div>
      </div>
   )
}

export default SingelProduct