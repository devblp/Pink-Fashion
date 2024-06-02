import React from "react";
import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Abaut from "./Page/Abaut";
import Cart from "./Page/Cart";
import Dasbord from "./Page/Dashbord";
import ProductDetail from "./Page/ProductDetail";
import Products from "./Page/Products";
import NotPage404 from "./Page/NotPage404";
import Auth from "./Page/Auth";
import SignUp from "./Page/Auth/SignUp";
import { Navigate, Route, Routes,useLocation   } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Search from "./Page/Search";
export default function App() {
  const { token } = useSelector((state) => state.auth);
  const theme = createTheme({
    palette:{
      primary: {
        main: "#ff92bc",
        bk:"#000000",
        bkk:"#737373",
        bkNero:"#1f1f1f",
        ws:"#ffffff",
      },
    }
  });
  const location = useLocation();
  const pathsWithoutNavbarAndFooter = ["/dashbord", "/auth","/sign-up","/*"];
  const hideNavbarAndFooter = pathsWithoutNavbarAndFooter.includes(location.pathname);
  return (
    <>
      <ThemeProvider theme={theme}>
        {!hideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/abaut" element={<Abaut />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashbord"
            element={token ? <Dasbord /> : <Navigate to={"/auth"} />}
          />
          <Route path="/product-detail/:id/:name" element={<ProductDetail />} />
          <Route path="/products/:catgoryId/:catgoryName" element={<Products />} />
          <Route
            path="/auth"
            element={!token ? <Auth /> : <Navigate to={"/dashbord"} />}
          />
          <Route
            path="/search"
            element={<Search/>}
          />
          <Route path="/sign-up" element={token ? <Navigate to={"/dashbord"}/>  : <SignUp />} />
          <Route path="/*" element={<NotPage404 />} />
        </Routes>
        {!hideNavbarAndFooter && <Footer />}
      </ThemeProvider>
    </>
  );
}
