import Head from "next/head";
import React from "react";
import PageWrapper from "@/components/animation/page-wrapper";
import Dashboard from "@/components/dashboard";

const UserDashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageWrapper>
        <div className="w-[calc(100%-160px)]  mt-32 float-end">
          <Dashboard />
        </div>
      </PageWrapper>
    </>
  );
};

export default UserDashboard;
