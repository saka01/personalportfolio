import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>1000K._</p>
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
};


export default Footer;
