import Head from "next/head";
import React from "react";
import { Dashboard } from "../../components/dashboard";
import PageWrapper from "@/components/animation/page-wrapper";

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
