import styled from "styled-components";

const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;

const ContentContainer = styled.main`
  position: relative;
  left: 250px;
  width: calc(100vw - 250px);
  min-height: calc(100vh - 148px);
  background: var(--color-gray-lightest);
  padding: 30px 40px;
  z-index: (--z-index-medium);

  @media (max-width: 768px) {
    min-height: calc(100vh - 101px);
    padding: 1rem;
    background: transparent;
  }

  @media (max-width: 425px) {
    left: 0;
    width: 100vw;
  }
`;
