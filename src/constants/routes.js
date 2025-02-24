import { layoutContent } from "./content";
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
    text: layoutContent.dashboard,
    link: appRoutes.DASHBOARD_LINK,
  },
  {
    key: "link_transactions",
    icon: Icons.TransactionsIcon,
    text: layoutContent.transactions,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_account",
    icon: Icons.AccountsIcon,
    text: layoutContent.accounts,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_investment",
    icon: Icons.InvestmentsIcon,
    text: layoutContent.investments,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_credit_card",
    icon: Icons.CreditCardsIcon,
    text: layoutContent.creditCards,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_loans",
    icon: Icons.LoansIcon,
    text: layoutContent.loans,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_services",
    icon: Icons.ServicesIcon,
    text: layoutContent.services,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_priviledges",
    icon: Icons.PriviledgesIcon,
    text: layoutContent.myPriviledges,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_settins",
    icon: Icons.SettingsIcon,
    iconActive: Icons.SettingsActiveIcon,
    text: layoutContent.settings,
    link: appRoutes.SETTINGS_LINK,
  },
];

export { appRoutes, sidebarLinks };
