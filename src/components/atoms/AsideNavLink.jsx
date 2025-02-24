import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { handleTabChange } from "../../redux/reducers/user";
import { layoutContent } from "../../constants/content";

import styled from "styled-components";

const AsideNavLink = ({ icon, iconActive, text, isActive, link }) => {
  const dispatch = useDispatch();
  const linkIcon = isActive ? iconActive : icon;

  const handleSidebarTabChange = useCallback(() => {
    const validPages = ["Dashboard", "Settings"];
    const currentTab = validPages.includes(text)
      ? text
      : layoutContent.dashboard;

    dispatch(handleTabChange(currentTab));
  }, [dispatch, text]);

  return (
    <AsideNavLinkContainer
      onClick={handleSidebarTabChange}
      to={link}
      className={isActive ? "active" : ""}
    >
      <img src={linkIcon} alt={text} />
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
  border-left: 6px solid var(--color-light);

  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-black-light);
  }
`;
