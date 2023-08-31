import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import "./styles/style.css"
import logo from "./images/logo.svg"

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
