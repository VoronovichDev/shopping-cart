import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigaton";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingelProduct from "./components/SingleProduct/SingelProduct";

import { useSelector } from "react-redux";

function App() {
   const currentItem = useSelector(state => state.shop.currentItem)
   return (
      <Router basename="/shopping-cart/">
         <div>
            <Navigation />
            <Routes>
               <Route path="/" element={<Products />} />
               <Route path="/cart" element={<Cart />} />
               {!currentItem ? (
                  <Route path="*" element={<Navigate to="/" replace />} />
               ) : (<Route path="/product/:id" element={<SingelProduct />} />)}
            </Routes>
         </div>
      </Router>
   );
}
export default App;
