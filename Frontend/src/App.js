import React from "react";
import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={} />
      </Routes>
      <Footer />
    </>
  );
}
