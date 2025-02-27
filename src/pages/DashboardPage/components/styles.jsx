import styled from "styled-components";

const Container = styled.div`
  .titleGroup {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sectionGroupReverse {
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .sectionGroup {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .chartSectionGroup1 {
    height: 360px;
    margin-bottom: 10px;
  }

  .chartSectionGroup2 {
    height: 300px;
  }
`;

const CreditCardsWrapper = styled.section`
  @media (max-width: 768px) {
    overflow-x: scroll !important;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: var(--color-primary);
  }

  .cardGroup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      overflow-x: scroll !important;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      gap: 16px;
      padding-bottom: 10px;
      white-space: nowrap;
    }
  }

  a {
    color: var(--color-primary);
  }

  .transactionsGroup {
    background: var(--color-white);
    border-radius: 25px;
    padding: 24px;
    height: 235px;
  }

  .sectionGroup {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
`;

const CardWrapper = styled.section`
  .cardContainer {
    background: var(--color-white);
    border-radius: 25px;
    padding: 24px;
  }

  .transactionsGroup {
    height: 235px;
  }
`;

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

    p {
    width: max-content;
      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

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

      .sendIcon {
        @media (max-width: 425px) {
          width: 16px;
          height: 14px;
        }
      }

      @media (max-width: 425px) {
        height: 40px;
              width: 100px;
      }
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

export {
  Container,
  CreditCardsWrapper,
  CardWrapper,
  QuickTransferContainer,
  Beneficiary,
};
