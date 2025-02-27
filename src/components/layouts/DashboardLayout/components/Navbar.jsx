import styled from "styled-components";

import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import { InputField } from "@components/molecules";

import { layoutContent } from "@/constants/content";

import ProfilePicture from "@assets/images/profile.png";
import SearchIcon from "@assets/icons/search.svg?react";
import SettingsIcon from "@assets/icons/settings-info.svg?react";
import NotificationIcon from "@assets/icons/notification.svg?react";
import HamburgerIcon from "@assets/icons/menu.svg?react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { activeTab } = useSelector(userSelector);

  const { dashboard, overview } = layoutContent;
  const title = activeTab === dashboard ? overview : activeTab;

  return (
    <NavbarContainer>
      <div class="navGroup">
        <HamburgerIcon className="showOnMobile" />
        <h1>{title}</h1>
        <div className="navCTAGroup">
          <InputField
            className="search_input hideOnSmallScreen"
            skin="flat"
            type="search"
            placeholder={layoutContent.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<SearchIcon />}
          />

          {NavCTAs.map((cta) => (
            <div
              key={cta.title}
              className="icon_with_background hideOnSmallScreen"
            >
              {cta.icon}
            </div>
          ))}

          <img
            className="profile_image"
            src={ProfilePicture}
            alt="Profile picture"
          />
        </div>
      </div>
      <InputField
        className="showOnTablet mobileSearch"
        skin="flat"
        type="search"
        placeholder={layoutContent.searchPlaceholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        icon={<SearchIcon />}
      />
    </NavbarContainer>
  );
};

export default Navbar;

const NavCTAs = [
  { title: "settings icon", icon: <SettingsIcon /> },
  { title: "notification icon", icon: <NotificationIcon /> },
];

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  margin-left: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 101px;
  width: calc(100vw - 250px);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-primary-lighter);
  z-index: var(--z-index-highest);
  padding: 0 40px;

  .navGroup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    height: max-content;
    padding: 16px 24px;
    border-bottom: none;

    .hideOnSmallScreen {
      display: none;
    }
  }

  @media (max-width: 425px) {
    margin-left: 0;
    width: 100%;
  }

  .showOnMobile {
    display: none;

    @media (max-width: 425px) {
      display: block;
    }
  }

  .showOnTablet {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobileSearch {
    margin-top: 1rem;
    width: 100%;
  }

  .navCTAGroup {
    display: flex;
    align-items: center;
    gap: 30px;

    .profile_image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .icon_with_background {
    width: 50px;
    height: 50px;
    background: var(--color-gray-lighter);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      display: none;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
  }
`;
