import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Layout } from "../Components/Layout/Layout";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Staff } from "../Pages/Staff/Staff";
import {WhatsAppBtn} from "../Components/WhatsAppBtn/WhatsAppBtn"
const RouterProvider = () => {
  return (
    <BrowserRouter>
    
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Layout>
      <Footer />
      <WhatsAppBtn />
    </BrowserRouter>
  );
};

export default RouterProvider;
