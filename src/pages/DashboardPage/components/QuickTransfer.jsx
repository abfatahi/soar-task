import { useState } from "react";
import styled from "styled-components";

import InputField from "../../../components/molecules/Inputfield";
import Button from "../../../components/atoms/Button";
import { overviewPageContent } from "../../../constants/content";

import ChevronRightIcon from "@assets/icons/chevron-right.svg?react";
import SendIcon from "@assets/icons/send.svg?react";

const QuickTransfer = ({ beneficiaries }) => {
  const [selectBeneficiary, setSelectBeneficiary] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transferAmount, setTransferAmount] = useState("");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficiaries.length);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Restrict input to 8 digits
    if (value.length <= 8) {
      setTransferAmount(value);
    }
  };

  const visibleBeneficiaries = beneficiaries.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <QuickTransferContainer>
      <div className="beneficiaryGroup">
        {visibleBeneficiaries.map((beneficiary) => (
          <Beneficiary
            key={beneficiary.name}
            className={
              selectBeneficiary?.name === beneficiary.name ? "selected" : ""
            }
            onClick={() => setSelectBeneficiary(beneficiary)}
          >
            <img
              className="profilePicture"
              src={beneficiary.profilePicture}
              alt={beneficiary.name}
            />
            <h3>{beneficiary.name}</h3>
            <p className="title">{beneficiary.title}</p>
          </Beneficiary>
        ))}
        <div className="chevronArrow" onClick={handleNext}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="formGroup">
        <p>{overviewPageContent.writeAmount}</p>
        <div className="inputGroup">
          <InputField
            skin="flat"
            placeholder={overviewPageContent.enterAmount}
            type="number"
            value={transferAmount}
            onChange={handleAmountChange}
            min="1"
            max="99999999"
          />
          <Button
            type="button"
            className="sendButton"
            size="medium"
            variant="secondary"
          >
            {overviewPageContent.send}
            <SendIcon />
          </Button>
        </div>
      </div>
    </QuickTransferContainer>
  );
};

export default QuickTransfer;

const Beneficiary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .profilePicture {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-primary);
    margin-bottom: 5px;
  }

  .title {
    color: var(--color-primary-light);
  }
`;

const QuickTransferContainer = styled.div`
  .selected {
    h3,
    .title {
      font-weight: 600;
    }
  }

  .beneficiaryGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    position: relative;
    margin-top: 1rem;
  }

  .formGroup {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    .inputGroup {
      position: relative;
      display: flex;
      align-items: center;
    }

    .sendButton {
      position: absolute;
      right: 0;
      width: 125px;
      height: 50px;
      border-radius: 50px;
    }
  }

  .chevronArrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 4px 24px var(--color-primary-lighter);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
