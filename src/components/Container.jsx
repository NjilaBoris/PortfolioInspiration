import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto w-full bg-red-600, ${className}`}>
      {children}
    </div>
  );
};

export default Container;
