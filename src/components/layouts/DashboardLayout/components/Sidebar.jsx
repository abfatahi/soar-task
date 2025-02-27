import styled from "styled-components";

import Logo from "@components/atoms/Logo";
import { AsideNavLink } from "@components/atoms";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";

import { sidebarLinks } from "@/constants/routes";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

const Sidebar = () => {
  const { activeTab } = useSelector(userSelector);
  return (
    <SidebarContainer>
      <ErrorBoundary>
        <Logo />
        {sidebarLinks.map((tab) => {
          const { key, ...rest } = tab;
          return (
            <AsideNavLink
              key={tab.key}
              {...rest}
              isActive={activeTab === tab.text}
            />
          );
        })}
      </ErrorBoundary>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-primary-lighter);
  z-index: (--z-index-low);

  .active {
    border-left: 6px solid var(--color-black);

    p {
      color: var(--color-black);
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;
