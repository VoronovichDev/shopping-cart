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
import s from './App.module.scss'
import SingelProduct from "./components/SingleProduct/SingelProduct";

import { connect } from "react-redux"

function App({ currentItem }) {
   return (
      <Router>
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

const mapStateToProps = state => {
   return {
      currentItem: state.shop.currentItem
   }
}

export default connect(mapStateToProps)(App);
