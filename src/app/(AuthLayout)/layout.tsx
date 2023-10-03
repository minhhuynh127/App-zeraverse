"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DrumLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <div className="bg-login object-cover bg-cover h-[100vh]">{children}</div>
      <ToastContainer />
    </>
  );
};

export default DrumLayout;
