import React from "react";
import DevName from "./DevName";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <DevName text={`Designed & Built by Moshood Saka Using
        [Javascript, React, Nextjs]`} />
    </footer>
  );
};

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  paddingBottom: "10px",
  paddingTop: "5px",
  height: "2.5rem" /* Footer height */,
  textAlign: "center",
  fontFamily: "JetBrains mono",
  whiteSpace: "pre-line",
  color: "#367588",
  backgroundColor: "#d0d8c2",
  fontFamily: "JetBrains mono",
  fontWeight: 400,
  fontSize: "11px",
};

export default Footer;
