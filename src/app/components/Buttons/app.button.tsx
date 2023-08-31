import React from "react";
const Button = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <button className={className}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
