import styled from "styled-components";

const CreditCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 235px;
  border-radius: 25px;
  padding: 24px;
  border: ${({ $isDarkTheme }) =>
    !$isDarkTheme ? "1px solid var(--color-primary-lighter)" : "none"};
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme
      ? "linear-gradient(to right, var(--color-black-lighter), var(--color-black))"
      : "var(--color-white)"};

  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 425px) {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: 300px;
    height: 170px;
    padding: 16px 24px;
  }

  .chip {
    width: 35px;
    height: 35px;

    @media (max-width: 425px) {
      width: 29px;
      height: 29px;
    }
  }

  .flexGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .detailsGroup {
    display: flex;
    align-items: center;
    gap: 67px;

    p {
      font-size: 15px;
      font-weight: 600;
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme ? "var(--color-white)" : "var(--color-primary)"};

      @media (max-width: 425px) {
        font-size: 13px;
      }
    }
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? "var(--color-primary-lightest)"
        : "var(--color-primary-light)"};

    @media (max-width: 425px) {
      font-size: 11px;
    }
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? "rgb(var(--color-white-rgb) / 70%)"
        : "var(--color-primary-light)"};

    @media (max-width: 425px) {
      font-size: 10px;
    }
  }

  .balanceGroup {
    margin-bottom: 33px;

    @media (max-width: 425px) {
      margin-bottom: 22px;
    }

    .balance {
      font-size: 20px;
      font-weight: 600;
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme
          ? "var(--color-primary-lightest)"
          : "var(--color-primary)"};

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }
  }

  .cardNumberGroup {
    position: absolute;
    padding: 24px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-top: ${({ $isDarkTheme }) =>
      !$isDarkTheme ? "1px solid var(--color-primary-lighter)" : "none"};
    background: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? "linear-gradient(to right, rgb(var(--color-white-rgb) / 10%), rgb(var(--color-white-rgb) / 07%))"
        : "var(--color-white)"};
    border-radius: 0 0 25px 25px;

    @media (max-width: 425px) {
      height: 42px;
      padding: 0 24px;
    }

    p {
      font-size: 22px;
      font-weight: 600;
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme
          ? "var(--color-primary-lightest)"
          : "var(--color-primary)"};

      @media (max-width: 425px) {
        font-size: 15px;
      }
    }

    .mastercard {
      width: 40px;
      height: 30px;

      @media (max-width: 425px) {
        width: 27px;
        height: 19px;
      }
    }
  }
`;

export { CreditCardContainer };
