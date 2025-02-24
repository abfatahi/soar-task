import styled from "styled-components";

const Navbar = () => {
  return <NavbarContainer />;
};

export default Navbar;

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
