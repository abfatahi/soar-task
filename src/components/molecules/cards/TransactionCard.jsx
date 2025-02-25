import styled from "styled-components";
import PropTypes from "prop-types";
import { formatAmount } from "@/services/helpers/string";

import CardLogo from "@assets/images/card.png";
import PaypalLogo from "@assets/images/paypal.png";
import VenmoLogo from "@assets/images/venmo.png";

const TransactionCard = ({ type, description, provider, date, amount }) => {
  const getCardImage = { card: CardLogo, paypal: PaypalLogo, venmo: VenmoLogo };

  const formattedAmount = `${type === "debit" ? "-" : "+"}${formatAmount(
    amount
  )}`;

  return (
    <TransactionCardContainer $isDebit={type === "debit"}>
      <div className="detailGroup">
        <img src={getCardImage[provider]} alt={description} />
        <div>
          <p className="description">{description}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="amount">{formattedAmount}</p>
    </TransactionCardContainer>
  );
};

TransactionCard.propTypes = {
  type: PropTypes.oneOf(["debit", "credit"]).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default TransactionCard;

const TransactionCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 10px;

  .detailGroup {
    display: flex;
    align-items: center;
    gap: 1rem;

    .description {
    font-weight: 500;
    }

    .date{
    color: var(--color-primary-light)
    }
  }

  .amount {
    color: ${({ $isDebit }) =>
      $isDebit ? "var(--color-danger)" : "var(--color-success)"};
  }
`;
