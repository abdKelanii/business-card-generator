import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../dashboard/sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const dashboard = router.asPath.startsWith("/dashboard");
  const viewPage = router.asPath.startsWith(
    `/${router.query.username as string}`
  );

  return (
    <div className="">
      {!viewPage && <Header />}

      {dashboard && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
