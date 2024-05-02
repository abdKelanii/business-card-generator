import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../dashboard/sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const dashboard = router.asPath.startsWith("/dashboard");

  return (
    <div className="">
      <Header />

      {dashboard && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
