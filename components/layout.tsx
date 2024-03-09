import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-slate-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
