import { layoutContent } from "./content";

const appRoutes = {
  HOME_LINK: "/",
  DASHBOARD_LINK: "/dashboard",
  SETTINGS_LINK: "/settings",
};

const sidebarLinks = [
  {
    key: "link_dashboard",
    text: layoutContent.dashboard,
    link: appRoutes.DASHBOARD_LINK,
  },
  {
    key: "link_transactions",
    text: layoutContent.transactions,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_account",
    text: layoutContent.accounts,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_investment",
    text: layoutContent.investments,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_credit_card",
    text: layoutContent.creditCards,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_loans",
    text: layoutContent.loans,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_services",
    text: layoutContent.services,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_priviledges",
    text: layoutContent.myPriviledges,
    link: appRoutes.HOME_LINK,
  },
  {
    key: "link_settins",
    text: layoutContent.settings,
    link: appRoutes.SETTINGS_LINK,
  },
];

export { appRoutes, sidebarLinks };
