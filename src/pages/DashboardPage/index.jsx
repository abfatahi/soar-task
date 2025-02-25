import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "../../services/apis/cards";

import { CreditCard } from "../../components/molecules";
import styled from "styled-components";
import { overviewPageContent } from "../../constants/content";
import { Link } from "react-router-dom";

function DashboardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <>
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
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;

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
`;
