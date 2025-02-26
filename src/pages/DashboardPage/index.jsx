import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "../../services/apis/cards";
import { getTransactions } from "../../services/apis/transactions";

import { CreditCard, TransactionCard } from "../../components/molecules";
import { overviewPageContent } from "../../constants/content";
import { Link } from "react-router-dom";

import {
  CardSectionWrapper,
  Container,
  TransactionSectionWrapper,
} from "./styles";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import { getWeeklyActivities } from "../../services/apis/statistics";

function DashboardPage() {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [weeklyActivities, setWeeklyActivities] = useState({});

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });

    getTransactions().then((res) => {
      setTransactions(res.data);
    });

    getWeeklyActivities().then((res) => {
      setWeeklyActivities(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <Container>
          <div className="sectionGroup">
            <CardSectionWrapper>
              <div className="titleGroup">
                <h2>{overviewPageContent.myCards}</h2>
                <Link>{overviewPageContent.seeAll}</Link>
              </div>
              <div className="cardGroup">
                {cards?.map((card, index) => (
                  <CreditCard key={`card-${index}`} {...card} />
                ))}
              </div>
            </CardSectionWrapper>
            <TransactionSectionWrapper>
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
            </TransactionSectionWrapper>
          </div>
          <div className="sectionGroup">
            <WeeklyActivityChart weeklyActivities={weeklyActivities} />
          </div>
        </Container>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
