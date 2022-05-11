import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./layout/Footer";
import Wrapper from "./layout/Wrapper";
import Header from "./layout/Header";
function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-category" element={<Products />}>
            <Route path=":categoryId" element={<Products />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
