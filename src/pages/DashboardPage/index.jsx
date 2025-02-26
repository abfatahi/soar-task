import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "@/services/apis/cards";
import { getTransactions } from "@/services/apis/transactions";
import {
  getExpensesPercentage,
  getWeeklyActivities,
} from "@/services/apis/statistics";
import { getBalanceHistory } from "@/services/apis/balanceHistory";

import { Link } from "react-router-dom";
import { CreditCard, TransactionCard } from "@/components/molecules";
import { overviewPageContent } from "@/constants/content";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import ExpensesStatisticsChart from "./components/ExpensesStatisticsChart";

import {
  CreditCardsWrapper,
  CardWrapper,
  Container,
} from "./components/styles";
import BalanceHistory from "./components/BalanceHistory";
import ErrorBoundary from "../../components/layouts/ErrorBoundary";

function DashboardPage() {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [weeklyActivities, setWeeklyActivities] = useState({});
  const [expensesStatistics, setExpensesStatistics] = useState({});
  const [balanceHistory, setBalanceHistory] = useState([]);

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

    getExpensesPercentage().then((res) => {
      setExpensesStatistics(res.data);
    });

    getBalanceHistory().then((res) => {
      setBalanceHistory(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <Container>
          <div className="sectionGroup">
            <CreditCardsWrapper>
              <div className="titleGroup">
                <h2>{overviewPageContent.myCards}</h2>
                <Link>{overviewPageContent.seeAll}</Link>
              </div>
              <div className="cardGroup">
                {cards?.map((card, index) => (
                  <CreditCard key={`card-${index}`} {...card} />
                ))}
              </div>
            </CreditCardsWrapper>
            <CardWrapper>
              <div className="titleGroup">
                <h2 className="titleGroup">
                  {overviewPageContent.recentTransaction}
                </h2>
              </div>
              <div className="cardContainer transactionsGroup">
                {transactions?.slice(0, 3).map((transaction, index) => (
                  <TransactionCard
                    key={`transaction-${index}`}
                    {...transaction}
                  />
                ))}
              </div>
            </CardWrapper>
          </div>
          <div className="sectionGroup">
            <CardWrapper className="weeklyActivity">
              <div className="titleGroup">
                <h2>{overviewPageContent.weeklyActivity}</h2>
              </div>
              <div className="cardContainer">
                <ErrorBoundary>
                  <WeeklyActivityChart weeklyActivities={weeklyActivities} />
                </ErrorBoundary>
              </div>
            </CardWrapper>
            <CardWrapper className="weeklyActivity">
              <div className="titleGroup">
                <h2>{overviewPageContent.expensesStatistics}</h2>
              </div>
              <div className="cardContainer">
                <ErrorBoundary>
                  <ExpensesStatisticsChart
                    expensesStatistics={expensesStatistics}
                  />
                </ErrorBoundary>
              </div>
            </CardWrapper>
          </div>
          <div className="sectionGroup">
            <CardWrapper className="weeklyActivity">
              <div className="titleGroup">
                <h2>{overviewPageContent.balanceHistory}</h2>
              </div>
              <div className="cardContainer">
                <ErrorBoundary>
                  <BalanceHistory balanceHistory={balanceHistory} />
                </ErrorBoundary>
              </div>
            </CardWrapper>
            <CardWrapper className="weeklyActivity">
              <div className="titleGroup">
                <h2>{overviewPageContent.quickTransfer}</h2>
              </div>
              <div className="cardContainer"></div>
            </CardWrapper>
          </div>
        </Container>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
