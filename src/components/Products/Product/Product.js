import React from "react";
import { Link } from "react-router-dom";
import s from "./Product.module.scss";
import testImg from '../../../img/test-img.jpg'

import { connect } from 'react-redux'
import { addToCart } from '../../../redux/Shopping/shopping-actions'

const Product = ({ productData, addToCart }) => {
   return (
      <div className={s.prod}>
         <img className={s.prod_img} src={productData.image} alt={productData.title} />

         <div className={s.prod_info}>
            <p className={s.info_title}>{productData.title}</p>
            <p className={s.info_desc}>{productData.description}</p>
            <p className={s.info_price}>$ {productData.price}</p>
         </div>

         <div className={s.prod_btns}>
            <Link to={`/product/111`}>
               <button className={`${s.btns_btn} ${s.btns_view}`}>
                  View Item
               </button>
            </Link>
            <button onClick={() => addToCart(productData.id)} className={`${s.btns_btn} ${s.btns_add}`}>
               Add To Cart
            </button>
         </div>
      </div>
   );
};

const mapDispatchToProps = dispatch => {
   return {
      addToCart: (id) => dispatch(addToCart(id))
   }
}

export default connect(null, mapDispatchToProps)(Product);