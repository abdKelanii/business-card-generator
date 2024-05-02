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

      <Dashboard />
    </>
  );
};

export default UserDashboard;
