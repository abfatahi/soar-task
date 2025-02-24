import { sidebarContent } from "./content";
import Icons from "./icons";

const appRoutes = {
  HOME_LINK: "/",
  DASHBOARD_LINK: "/dashboard",
  SETTINGS_LINK: "/settings",
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

export { appRoutes, sidebarLinks };
