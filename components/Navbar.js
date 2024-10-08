import React from "react";
import DevName from "./DevName";
import styles from 'styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <DevName text="MS._" />
      </div>
      <div className={styles.menu}>
        <ul className={styles.ulStyle}>
          <li className={styles.menuItem}>
            <Link href="#about" legacyBehavior>
              <a className={styles.menuLink}>About</a>
            </Link>
          </li>
          |
          <li className={styles.menuItem}>
            <Link href="#experience" legacyBehavior>
              <a className={styles.menuLink}>Experience</a>
            </Link>
          </li>
          |
          <li className={styles.menuItem}>
            <Link href="#projects" legacyBehavior>
              <a className={styles.menuLink}>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
