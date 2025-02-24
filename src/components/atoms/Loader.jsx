import styled from "styled-components";
import LoadingSpinner from "./Spinner";
import { layoutContent } from "../../constants/content";

const Loader = () => {
  return (
    <LoaderContainer>
      <p>{layoutContent.loading}</p>
      <LoadingSpinner />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
