import Logo from "@components/atoms/Logo";
import { SidebarContainer } from "../DashboardLayout.module";
import { AsideNavLink } from "@components/atoms";

import { sidebarContent } from "@/constants/content";
import { appRoutes } from "@/constants/routes";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

// Icons
import Icons from "@/constants/icons";

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

const sidebarLinks = [
  {
    key: "link_dashboard",
    icon: Icons.DashboardIcon,
    iconActive: Icons.DashboardActiveIcon,
    text: sidebarContent.dashboard,
    link: appRoutes.DASHBOARD_LINK,
  },
  {
    key: "link_transactions",
    icon: Icons.TransactionsIcon,
    text: sidebarContent.transactions,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_account",
    icon: Icons.AccountsIcon,
    text: sidebarContent.accounts,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_investment",
    icon: Icons.InvestmentsIcon,
    text: sidebarContent.investments,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_credit_card",
    icon: Icons.CreditCardsIcon,
    text: sidebarContent.creditCards,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_loans",
    icon: Icons.LoansIcon,
    text: sidebarContent.loans,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_services",
    icon: Icons.ServicesIcon,
    text: sidebarContent.services,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_priviledges",
    icon: Icons.PriviledgesIcon,
    text: sidebarContent.myPriviledges,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_settins",
    icon: Icons.SettingsIcon,
    iconActive: Icons.SettingsActiveIcon,
    text: sidebarContent.settings,
    link: appRoutes.SETTINGS_LINK,
  },
];

export default Sidebar;
