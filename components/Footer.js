import React from "react";
import DevName from "./DevName";

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
  paddingBottom: "10px",
  height: "2.5rem" /* Footer height */,
  textAlign: "center",
};

export default Footer;
