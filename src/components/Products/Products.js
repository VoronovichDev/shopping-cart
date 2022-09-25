import React from "react";
import s from "./Products.module.scss";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
   const products = useSelector(state => state.shop.products)

   return (
      <div className={s.products}>
         {products.map((prod) => (
            <Product key={prod.id} productData={prod} />
         ))}

      </div>
   );
};

export default Products;