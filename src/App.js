import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigaton";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import s from './App.module.scss'

function App() {
   return (
      <Router>
         <div>
            <Navigation />
            <Routes>
               <Route path="/" element={<Products />} />
               <Route path="/cart" element={<Cart />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
