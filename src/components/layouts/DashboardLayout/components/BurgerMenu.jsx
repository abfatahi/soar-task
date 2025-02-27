import styled from "styled-components";

import { AsideNavLink } from "@components/atoms";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";

import { sidebarLinks } from "@/constants/routes";
import { layoutContent } from "@/constants/content";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import LogoImage from "@assets/icons/logo.svg?react";
import CancelIcon from "@assets/icons/cancel.svg?react";

const BurgerMenu = () => {
  const { activeTab } = useSelector(userSelector);
  return (
    <BurgerMenuContainer>
      <ErrorBoundary>
        <div className="titleGroup">
          <div className="title">
            <LogoImage />
            <p>{layoutContent.appName}</p>
          </div>
          <CancelIcon />
        </div>
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
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;

const BurgerMenuContainer = styled.aside`
  display: none;
  height: 100vh;
  width: 100%;
  background-color: var(--color-white);
  z-index: (--z-index-highest);

  .active {
    border-left: 6px solid var(--color-black);

    p {
      color: var(--color-black);
    }
  }

  @media (max-width: 425px) {
    display: block;
  }

  .titleGroup {
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      gap: 1rem;

      p {
        font-size: 25px;
        font-weight: 800;
      }
    }
  }
`;
