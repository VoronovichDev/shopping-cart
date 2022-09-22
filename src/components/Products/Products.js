import React from "react";
import s from "./Products.module.scss";

import Product from "./Product/Product";

const Products = () => {
   return (
      <div className={s.products}>
         <Product />
      </div>
   );
};

export default Products;