import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <a> 𝒲𝒪ℛℒ𝒟 𝒬𝒰ℰ𝒮𝒯ℐ̇𝒪𝒩 </a>
          </Link>
        </li>

        <li>
          <Link href="/HomePage">
            <a>Home Page </a>
          </Link>
        </li>
        <li>
          <Link href="/AboutPage">
            <a>About Page </a>
          </Link>
        </li>
        <li>
          <Link href="/QuestionPage">
            <a> Question Page </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
