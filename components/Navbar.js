import React from "react";
import DevName from "./devName";

const Navbar = () => {
  return (
      <div>
        <div>
          <DevName />
        </div>
        <div>
          <ul>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
