import styled from "styled-components";

const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;

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
