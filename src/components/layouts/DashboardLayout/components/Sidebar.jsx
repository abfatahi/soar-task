import Logo from "@components/atoms/Logo";
import { SidebarContainer } from "../DashboardLayout.module";
import { AsideNavLink } from "@components/atoms";

import { sidebarContent } from "@/constants/content";
import { appRoutes, sidebarLinks } from "@/constants/routes";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

const Sidebar = () => {
  const { activeTab } = useSelector(userSelector);
  return (
    <SidebarContainer>
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
    </SidebarContainer>
  );
};

export default Sidebar;
