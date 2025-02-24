import Logo from "@components/atoms/Logo";
import { SidebarContainer } from "../DashboardLayout.module";
import { sidebarContent } from "@/constants/content";
import { appRoutes } from "@/constants/routes";

import DashboardIcon from "@assets/icons/dashboard.svg";
import DashboardActiveIcon from "@assets/icons/dashboard-active.svg";
import TransactionsIcon from "@assets/icons/transactions.svg";
import AccountsIcon from "@assets/icons/accounts.svg";
import InvestmentsIcon from "@assets/icons/investments.svg";
import CreditCardsIcon from "@assets/icons/credit-cards.svg";
import LoansIcon from "@assets/icons/loans.svg";
import ServicesIcon from "@assets/icons/services.svg";
import PriviledgesIcon from "@assets/icons/priviledges.svg";
import SettingsIcon from "@assets/icons/settings.svg";
import SettingsActiveIcon from "@assets/icons/settings-active.svg";
import { AsideNavLink } from "../../../atoms";

const Sidebar = () => {
  const activeTab = "/dashboard";
  return (
    <SidebarContainer>
      <Logo />
      {sidebarLinks.map((tab) => {
        const { key, ...rest } = tab;
        return (
          <AsideNavLink
            key={tab.key}
            {...rest}
            isActive={activeTab === tab.link}
          />
        );
      })}
    </SidebarContainer>
  );
};

const sidebarLinks = [
  {
    key: "link_dashboard",
    icon: DashboardIcon,
    iconActive: DashboardActiveIcon,
    text: sidebarContent.dashboard,
    link: appRoutes.DASHBOARD_LINK,
  },
  {
    key: "link_transactions",
    icon: TransactionsIcon,
    text: sidebarContent.transactions,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_account",
    icon: AccountsIcon,
    text: sidebarContent.accounts,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_investment",
    icon: InvestmentsIcon,
    text: sidebarContent.investments,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_credit_card",
    icon: CreditCardsIcon,
    text: sidebarContent.creditCards,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_loans",
    icon: LoansIcon,
    text: sidebarContent.loans,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_services",
    icon: ServicesIcon,
    text: sidebarContent.services,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_priviledges",
    icon: PriviledgesIcon,
    text: sidebarContent.myPriviledges,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_settins",
    icon: SettingsIcon,
    iconActive: SettingsActiveIcon,
    text: sidebarContent.settings,
    link: appRoutes.SETTINGS_LINK,
  },
];

export default Sidebar;
