import React from "react";
import s from "./Products.module.scss";
import { connect } from "react-redux"
import Product from "./Product/Product";

const Products = ({ products }) => {
   return (
      <div className={s.products}>
         {products.map((prod) => (
            <Product key={prod.id} productData={prod} />
         ))}

      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      products: state.shop.products
   }
}

export default connect(mapStateToProps)(Products);