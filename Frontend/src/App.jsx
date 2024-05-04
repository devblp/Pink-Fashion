import React from "react";
import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Abaut from "./Page/Abaut"
import Cart from "./Page/Cart"
import Dasbord from "./Page/Dashbord"
import ProductDetail from "./Page/ProductDetail"
import Products from "./Page/Products";
import NotPage404 from "./Page/NotPage404"
import { Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/abaut" element={<Abaut/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashbord" element={<Dasbord/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="*" element={<NotPage404/>}/>
      </Routes>
      <Footer />
    </>
  );
}
