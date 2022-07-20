import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../organims/footer/Footer";
import { Header } from "../organims/header/Header";

const Layout = () => (
  <div className="Main">
    <Header />

    <Outlet />

    <Footer />
  </div>
);

export default Layout;
