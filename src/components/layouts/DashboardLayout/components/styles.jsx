import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  margin-left: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 101px;
  width: calc(100vw - 250px);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-primary-lighter);
  z-index: var(--z-index-medium);
  padding: 0 40px;

  .navGroup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    height: max-content;
    padding: 16px 24px;
    border-bottom: none;

    .hideOnSmallScreen {
      display: none;
    }
  }

  @media (max-width: 425px) {
    margin-left: 0;
    width: 100%;
  }

  .showOnMobile {
    display: none;

    @media (max-width: 425px) {
      display: block;
    }
  }

  .showOnTablet {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobileSearch {
    margin-top: 1rem;
    width: 100%;
  }

  .navCTAGroup {
    display: flex;
    align-items: center;
    gap: 30px;

    .profile_image {
      width: 60px;
      height: 60px;
      border-radius: 50%;

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      }

      @media (max-width: 425px) {
        width: 35px;
        height: 35px;
      }
    }
  }

  .icon_with_background {
    width: 50px;
    height: 50px;
    background: var(--color-gray-lighter);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      display: none;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;

export { NavbarContainer };
