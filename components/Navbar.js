import React from "react";
import Link from "next/link";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    height: "50%",
    width: "200px",
    padding: "20px 0",
    background: "transparent",
    color: "#fff",
    zIndex: "100",
  },
  menuOption: {
    cursor: "pointer",
    padding: "10px 0",
  },
};

const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <Link href="/resume" style={styles.menuOption}>
        Resume
      </Link>
      <Link href="/projects" style={styles.menuOption}>
        02 ----- Projects
      </Link>
      <Link href="/aboutme" style={styles.menuOption}>
        About
      </Link>
    </div>
  );
};

export default NavBar;
