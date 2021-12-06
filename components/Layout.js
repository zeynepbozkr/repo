import React from "react";
import Nav from "./Nav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
