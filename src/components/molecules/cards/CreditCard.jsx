import styled from "styled-components";
import PropTypes from "prop-types";
import { overviewPageContent } from "@/constants/content";
import { maskCardNumber, formatBalance } from "@/services/helpers/string";

import CardChipLight from "@assets/images/card-chip-light.png";
import CardChipDark from "@assets/images/card-chip-dark.png";
import MasterCardLight from "@assets/images/mastercard-light.png";
import MasterCardDark from "@assets/images/mastercard-dark.png";

const CreditCard = ({ theme, name, expiryDate, number, availableBalance }) => {
  const isDarkTheme = theme === "dark";

  return (
    <CreditCardContainer $isDarkTheme={isDarkTheme}>
      <div className="flexGroup balanceGroup">
        <div>
          <h3>{overviewPageContent.balance}</h3>
          <p className="balance">{formatBalance(availableBalance)}</p>
        </div>
        <CardImage
          isDarkTheme={isDarkTheme}
          lightSrc={CardChipLight}
          darkSrc={CardChipDark}
          alt="Card chip"
        />
      </div>
      <div className="detailsGroup">
        <div>
          <h4>{overviewPageContent.cardHolder}</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>{overviewPageContent.validThru}</h4>
          <p>{expiryDate}</p>
        </div>
      </div>
      <div className="flexGroup cardNumberGroup">
        <p>{maskCardNumber(number)}</p>
        <CardImage
          isDarkTheme={isDarkTheme}
          lightSrc={MasterCardLight}
          darkSrc={MasterCardDark}
          alt="Mastercard"
        />
      </div>
    </CreditCardContainer>
  );
};

CreditCard.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  name: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  availableBalance: PropTypes.number.isRequired,
};

export default CreditCard;

const CardImage = ({ isDarkTheme, lightSrc, darkSrc, alt }) => (
  <img src={isDarkTheme ? darkSrc : lightSrc} alt={alt} />
);

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
    }
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? "var(--color-primary-lightest)"
        : "var(--color-primary-light)"};
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? "rgb(var(--color-white-rgb) / 70%)"
        : "var(--color-primary-light)"};
  }

  .balanceGroup {
    margin-bottom: 33px;

    .balance {
      font-size: 20px;
      font-weight: 600;
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme
          ? "var(--color-primary-lightest)"
          : "var(--color-primary)"};
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

    p {
      font-size: 22px;
      font-weight: 600;
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme
          ? "var(--color-primary-lightest)"
          : "var(--color-primary)"};
    }
  }
`;
