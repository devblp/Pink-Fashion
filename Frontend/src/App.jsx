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
import { Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux"
import Auth from "./Sore/Slices/Auth";

export default function App() {
  const {token} = useSelector(state=>state.auth)
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/abaut" element={<Abaut/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashbord" element={token?<Dasbord/>:<Navigate to={"/auth"}/>}/>
        <Route path="/product-detail/:id/name" element={<ProductDetail/>}/>
        <Route path="/products/:detailId/:detailName" element={<Products/>} />
        <Route path="/auth" element={!token?<Auth/>:<Navigate to={"/dashbord"}/>}/>
        <Route path="/search/:query" element={!token?<Auth/>:<Navigate to={"/"}/>}/>
        <Route path="*" element={<NotPage404/>}/>
      </Routes>
      <Footer />
    </>
  );
}
