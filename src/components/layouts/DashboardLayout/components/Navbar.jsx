import styled from "styled-components";

import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import { InputField } from "@components/molecules";

import { layoutContent } from "@/constants/content";

import ProfilePicture from "@assets/images/profile.png";
import SearchIcon from "@assets/icons/search.svg";
import SettingsIcon from "@assets/icons/settings-info.svg";
import NotificationIcon from "@assets/icons/notification.svg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { activeTab } = useSelector(userSelector);

  const { dashboard, overview } = layoutContent;
  const title = activeTab === dashboard ? overview : activeTab;

  return (
    <NavbarContainer>
      <h1>{title}</h1>
      <div className="nav_group">
        <InputField
          type="search"
          placeholder={layoutContent.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={SearchIcon}
        />

        {NavCTAs.map((cta) => (
          <div className="icon_with_background">
            <img key={cta.title} src={cta.icon} alt={cta.title} />
          </div>
        ))}

        <img
          className="profile_image"
          src={ProfilePicture}
          alt="Profile picture"
        />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavCTAs = [
  { title: "settings icon", icon: SettingsIcon },
  { title: "notification icon", icon: NotificationIcon },
];

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  margin-left: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101px;
  width: calc(100vw - 250px);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-primary-lighter);
  z-index: var(--z-index-highest);
  padding: 0 40px;

  @media (max-width: 425px) {
    margin-left: 0;
    width: 100%;
  }

  .nav_group {
    display: flex;
    align-items: center;
    gap: 30px;

    profile_image {
      width: 60px;
      height: 60px;
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
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
  }
`;
