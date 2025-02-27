import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { handleTabChange } from "@/redux/reducers/user";
import { layoutContent } from "@/constants/content";

import styled from "styled-components";

import DashboardIcon from "@assets/icons/dashboard.svg?react";
import DashboardActiveIcon from "@assets/icons/dashboard-active.svg?react";
import TransactionsIcon from "@assets/icons/transactions.svg?react";
import AccountsIcon from "@assets/icons/accounts.svg?react";
import InvestmentsIcon from "@assets/icons/investments.svg?react";
import CreditCardsIcon from "@assets/icons/credit-cards.svg?react";
import LoansIcon from "@assets/icons/loans.svg?react";
import ServicesIcon from "@assets/icons/services.svg?react";
import PriviledgesIcon from "@assets/icons/priviledges.svg?react";
import SettingsIcon from "@assets/icons/settings.svg?react";
import SettingsActiveIcon from "@assets/icons/settings-active.svg?react";

const AsideNavLink = ({ text, isActive, link }) => {
  const dispatch = useDispatch();

  const handleSidebarTabChange = useCallback(() => {
    const validPages = ["Dashboard", "Settings"];
    const currentTab = validPages.includes(text)
      ? text
      : layoutContent.dashboard;

    dispatch(handleTabChange(currentTab));
  }, [dispatch, text]);

  const linkIconMap = {
    Dashboard: isActive ? <DashboardActiveIcon /> : <DashboardIcon />,
    Settings: isActive ? <SettingsActiveIcon /> : <SettingsIcon />,
    Transactions: <TransactionsIcon />,
    Accounts: <AccountsIcon />,
    Investments: <InvestmentsIcon />,
    "Credit Cards": <CreditCardsIcon />,
    Loans: <LoansIcon />,
    Services: <ServicesIcon />,
    "My Priviledges": <PriviledgesIcon />,
  };

  return (
    <AsideNavLinkContainer
      onClick={handleSidebarTabChange}
      to={link}
      className={isActive ? "active" : ""}
    >
      {linkIconMap[text]}
      <p>{text}</p>
    </AsideNavLinkContainer>
  );
};

export default AsideNavLink;

const AsideNavLinkContainer = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 30px;
  text-decoration: none;
  border-left: 6px solid var(--color-white);

  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-black-lightest);

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
`;
