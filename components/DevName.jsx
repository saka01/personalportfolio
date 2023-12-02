import React from "react";
import Link from "next/link";

const DevName = ({text}) => {
  return (
    <Link href="/" legacyBehaviour legacyBehavior>
      <a className="devName">{text}</a>
    </Link>
  );
};

export default DevName;
