import React from "react";
import DevName from "./devName";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <DevName />
    </footer>
  );
};

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem" /* Footer height */,
  //   background: "#000000",
  padding: "10px",
  textAlign: "center",
  fontFamily: "system-ui, sans-serif",
};

export default Footer;
