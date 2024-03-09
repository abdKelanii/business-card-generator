import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="w-full px-36 h-24 flex items-center bg-white shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="text-3xl font-bold">
          <h1 className="text-black">Business Card Generator</h1>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <button className="py-3 px-6 border text-darkBlue hover:text-white border-lightBlue rounded-sm hover:bg-darkBlue">
              Signup
            </button>
          </div>
          <div>
            <button className="bg-lightBlue text-white py-3 px-6 rounded-sm hover:bg-darkBlue ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;