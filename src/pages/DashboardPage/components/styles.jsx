import styled from "styled-components";

const Container = styled.div`
  .titleGroup {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export { Container, CreditCardsWrapper, CardWrapper };
