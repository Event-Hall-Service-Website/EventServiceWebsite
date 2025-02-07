import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
