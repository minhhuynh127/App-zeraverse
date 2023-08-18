import React from "react";

const DrumLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-login object-cover bg-cover h-[100vh]">{children}</div>
  );
};

export default DrumLayout;
