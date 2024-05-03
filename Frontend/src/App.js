import React from "react";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dashbord from "./Page/Dashbord/Dashbord"
import { Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashbord" element={<Dashbord/>} />
      </Routes>
      <Footer />
    </>
  );
}
