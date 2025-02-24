import styled from "styled-components";

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid var(--color-primary-lighter);
  border-top: 4px solid var(--color-info);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
