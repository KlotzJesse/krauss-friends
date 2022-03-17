import React from "react";

const Layout = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6">{children}</div>;
};

Layout.propTypes = {};

export default Layout;
