import styled from "styled-components";

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-light);
`;

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--color-light);
  border-right: 1px solid var(--color-primary-lighter);
  z-index: (--z-index-low);

  @media (max-width: 425px) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  margin-left: 250px;
  height: 101px;
  width: calc(100vw - 250px);
  background-color: var(--color-light);
  border-bottom: 1px solid var(--color-primary-lighter);
  z-index: (--z-index-medium);

  @media (max-width: 425px) {
    margin-left: 0;
    width: 100%;
  }
`;

const ContentContainer = styled.main`
  position: relative;
  left: 250px;
  width: calc(100vw - 250px);
  min-height: calc(100vh - 101px);
  background: var(--color-gray-lightest);
  padding: 16px;
  z-index: (--z-index-low);

  @media (max-width: 425px) {
    left: 0;
    width: 100vw;
  }
`;

export { LayoutContainer, SidebarContainer, NavbarContainer, ContentContainer };
