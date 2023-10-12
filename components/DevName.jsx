import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LogoText = styled.a`
  font-family: var(--font-system-ui);
  font-weight: 700;
  font-size: 22px;
  line-height: 37px;
`;

const DevName = () => {
  return (
    <Link href="/" legacyBehaviour legacyBehavior>
      <LogoText>1000K . _</LogoText>
    </Link>
  );
};

export default DevName;
