import Head from "next/head";
import React from "react";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="h-screen">
        <div className="flex justify-center w-full h-full mt-24">
          <div className="flex justify-center w-3/4">
            <div className="">
              <h3>Signup new account</h3>
              <div className="mt-10 ">
                <div className="mb-3">
                  <label className="block">Email</label>
                  <input type="text" name="email" />
                </div>
                <div className="mb-3">
                  <label className="block">Passoword</label>
                  <input type="text" name="password" />
                </div>
                <div className="mb-3">
                  <label className="block">Enter your passoword again</label>
                  <input type="text" name="password" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
