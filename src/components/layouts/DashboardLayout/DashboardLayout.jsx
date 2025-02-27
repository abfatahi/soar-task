import styled from "styled-components";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BurgerMenu from "./components/BurgerMenu";

const DashboardLayout = ({ children }) => {
  const { showBurgerMenu } = useSelector(userSelector);
  return (
    <LayoutContainer>
      {showBurgerMenu && <BurgerMenu />}
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default DashboardLayout;

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-white);
`;
