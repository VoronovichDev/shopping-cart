import React from "react";
import s from './SingleProduct.module.scss'
import testImg from '../../img/test-img.jpg'

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingelProduct = ({ currentItem, addToCart }) => {
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
               onClick={() => addToCart(currentItem.id)}
               className={s.info_addBtn}>Add To Cart</button>
         </div>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      currentItem: state.shop.currentItem
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addToCart: (id) => dispatch(addToCart(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingelProduct) 