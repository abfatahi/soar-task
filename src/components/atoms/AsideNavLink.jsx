import { Link } from "react-router-dom";

import styled from "styled-components";

const AsideNavLink = ({ icon, iconActive, text, isActive, link }) => {
  const linkIcon = isActive ? iconActive : icon;

  return (
    <AsideNavLinkContainer to={link} className={isActive ? "active" : ""}>
      <img src={linkIcon} />
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
