import { useState } from "react";
import { useDispatch } from "react-redux";

import InputField from "@components/molecules/Inputfield";
import Button from "@components/atoms/Button";

import { handleCreateNewTransfer } from "@/redux/reducers/transactions";
import { overviewPageContent } from "@/constants/content";

import ChevronRightIcon from "@assets/icons/chevron-right.svg?react";
import SendIcon from "@assets/icons/send.svg?react";

import { Beneficiary, QuickTransferContainer } from "./styles";

const QuickTransfer = ({ beneficiaries }) => {
  const dispatch = useDispatch();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transferAmount, setTransferAmount] = useState("");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficiaries.length);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value.length <= 8) {
      setTransferAmount(value);
    }
  };

  const visibleBeneficiaries = beneficiaries.slice(
    currentIndex,
    currentIndex + 3
  );

  const isValidTransfer = () => {
    return selectedBeneficiary && transferAmount > 0;
  };

  const handleCreateTransfer = () => {
    const transferDate = new Date()?.toISOString()?.split("T")[0];

    const newTransfer = {
      type: "debit",
      description: `Cash transfer to ${
        selectedBeneficiary?.name?.split(" ")[0]
      }`,
      provider: "card",
      amount: transferAmount,
      to: selectedBeneficiary.accountNumber,
      date: transferDate,
    };

    dispatch(handleCreateNewTransfer(newTransfer));
    setTransferAmount("");
  };

  return (
    <QuickTransferContainer>
      <div className="beneficiaryGroup">
        {visibleBeneficiaries.map((beneficiary) => (
          <Beneficiary
            key={beneficiary.name}
            className={
              selectedBeneficiary?.name === beneficiary.name ? "selected" : ""
            }
            onClick={() => setSelectedBeneficiary(beneficiary)}
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
            disabled={!isValidTransfer()}
            onClick={handleCreateTransfer}
          >
            {overviewPageContent.send}
            <SendIcon className="sendIcon"/>
          </Button>
        </div>
      </div>
    </QuickTransferContainer>
  );
};

export default QuickTransfer;
