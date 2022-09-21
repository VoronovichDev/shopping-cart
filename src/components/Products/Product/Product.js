import React from "react";
import { Link } from "react-router-dom";
import s from "./Product.module.scss";

const Product = () => {
   return (
      <div>
         <img src="" alt="" />

         <div >
            <p >Title</p>
            <p >Description</p>
            <p >$ 10.00</p>
         </div>

         <div>
            <Link to={`/product/111`}>
               <button >
                  View Item
               </button>
            </Link>
            <button>
               Add To Cart
            </button>
         </div>
      </div>
   );
};

export default Product;