import { useState } from "react";
import styled from "styled-components";

import ChevronRightIcon from "@assets/icons/chevron-right.svg?react";

const QuickTransfer = ({beneficiaries}) => {
  const [selectBeneficiary, setSelectBeneficiary] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficiaries.length);
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
            key={beneficiary.id}
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
          <ChevronRightIcon width="16" height="16" />
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
  width: 105px;

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
  }

  .chevronArrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 4px 24px var(--color-primary-lighter);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
