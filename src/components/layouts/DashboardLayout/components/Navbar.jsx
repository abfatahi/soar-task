import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import { handleShowBurgerMenu } from "@/redux/reducers/user";

import { InputField } from "@components/molecules";

import { layoutContent } from "@/constants/content";

import ProfilePicture from "@assets/images/profile.png";
import SearchIcon from "@assets/icons/search.svg?react";
import SettingsIcon from "@assets/icons/settings-info.svg?react";
import NotificationIcon from "@assets/icons/notification.svg?react";
import HamburgerIcon from "@assets/icons/menu.svg?react";

import { NavbarContainer } from "./styles";

const Navbar = () => {
  const dispatch = useDispatch();
  
  const [searchQuery, setSearchQuery] = useState("");
  const { activeTab } = useSelector(userSelector);

  const { dashboard, overview } = layoutContent;
  const title = activeTab === dashboard ? overview : activeTab;

  return (
    <NavbarContainer>
      <div className="navGroup">
        <HamburgerIcon
          className="showOnMobile"
          onClick={() => dispatch(handleShowBurgerMenu())}
        />
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
