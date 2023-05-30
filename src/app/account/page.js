import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <div>
      <Navbar />
      <h1 className="flex justify-center items-center">Account Page</h1>
      <h3 className="text-white block m-4 p-3 cursor-pointer font-bold">
        Sign up
      </h3>
      <h3 className="text-white block m-4 p-3 cursor-pointer font-bold">
        Log in
      </h3>
      <h3 className="text-white block m-4 p-3 cursor-pointer font-bold">
        Log Out
      </h3>
      <Footer />
    </div>
  );
};

export default Account;
