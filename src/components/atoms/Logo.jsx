import styled from "styled-components";
import { layoutContent } from "@/constants/content";

import LogoImage from "@assets/icons/logo.svg?react";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage />
      <p>{layoutContent.appName}</p>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 101px;
  margin-bottom: 1rem;

  p {
    font-size: 25px;
    font-weight: 800;
  }
`;
