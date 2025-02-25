import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "../../services/apis/cards";
import { getTransactions } from "../../services/apis/transactions";

import { CreditCard, TransactionCard } from "../../components/molecules";
import styled from "styled-components";
import { overviewPageContent } from "../../constants/content";
import { Link } from "react-router-dom";

function DashboardPage() {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });

    getTransactions().then((res) => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <Container>
          <div className="sectionGroup">
            <SectionWrapper>
              <div className="titleGroup">
                <h2>{overviewPageContent.myCards}</h2>
                <Link>{overviewPageContent.seeAll}</Link>
              </div>
              <div className="cardGroup">
                {cards?.map((card, index) => (
                  <CreditCard key={`card-${index}`} {...card} />
                ))}
              </div>
            </SectionWrapper>
            <SectionWrapper>
              <div className="titleGroup">
                <h2>{overviewPageContent.recentTransaction}</h2>
              </div>
              <div className="transactionsGroup">
                {transactions?.slice(0, 3).map((transaction, index) => (
                  <TransactionCard
                    key={`transaction-${index}`}
                    {...transaction}
                  />
                ))}
              </div>
            </SectionWrapper>
          </div>
        </Container>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;

const Container = styled.div`
  .sectionGroup {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
`;

const SectionWrapper = styled.section`
  .titleGroup {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
