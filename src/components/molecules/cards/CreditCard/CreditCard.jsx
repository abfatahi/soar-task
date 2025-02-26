import PropTypes from "prop-types";
import { overviewPageContent } from "@/constants/content";
import { maskCardNumber, formatAmount } from "@/services/helpers/string";

import CardChipLight from "@assets/images/card-chip-light.png";
import CardChipDark from "@assets/images/card-chip-dark.png";
import MasterCardLight from "@assets/images/mastercard-light.png";
import MasterCardDark from "@assets/images/mastercard-dark.png";

import { CreditCardContainer } from "./styles";

const CardImage = ({ isDarkTheme, lightSrc, darkSrc, alt, ...props }) => (
  <img src={isDarkTheme ? darkSrc : lightSrc} alt={alt} {...props} />
);

const CreditCard = ({ theme, name, expiryDate, number, availableBalance }) => {
  const isDarkTheme = theme === "dark";

  return (
    <CreditCardContainer $isDarkTheme={isDarkTheme}>
      <div className="flexGroup balanceGroup">
        <div>
          <h3>{overviewPageContent.balance}</h3>
          <p className="balance">{formatAmount(availableBalance)}</p>
        </div>
        <CardImage
          isDarkTheme={isDarkTheme}
          lightSrc={CardChipLight}
          darkSrc={CardChipDark}
          alt="Card chip"
          className="chip"
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
          className="mastercard"
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
