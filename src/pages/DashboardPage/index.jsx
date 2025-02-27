import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";
import { Link } from "react-router-dom";
import { CreditCard, TransactionCard } from "@/components/molecules";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import ExpensesStatisticsChart from "./components/ExpensesStatisticsChart";
import BalanceHistory from "./components/BalanceHistory";

import { getCards } from "@/services/apis/cards";
import { getTransactions } from "@/services/apis/transactions";
import {
  getExpensesPercentage,
  getWeeklyActivities,
} from "@/services/apis/statistics";
import { getBalanceHistory } from "@/services/apis/balanceHistory";

import { overviewPageContent } from "@/constants/content";

import {
  CreditCardsWrapper,
  CardWrapper,
  Container,
} from "./components/styles";
import QuickTransfer from "./components/QuickTransfer";

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
            <ChartGroup title={overviewPageContent.weeklyActivity}>
              <WeeklyActivityChart weeklyActivities={weeklyActivities} />
            </ChartGroup>

            <ChartGroup title={overviewPageContent.expensesStatistics}>
              <ExpensesStatisticsChart
                expensesStatistics={expensesStatistics}
              />
            </ChartGroup>
          </div>
          <div className="sectionGroup">
            <ChartGroup title={overviewPageContent.balanceHistory}>
              <BalanceHistory balanceHistory={balanceHistory} />
            </ChartGroup>

            <ChartGroup title={overviewPageContent.quickTransfer}>
              <QuickTransfer />
            </ChartGroup>
          </div>
        </Container>
      }
    </DashboardLayout>
  );
}

const ChartGroup = ({ title, children }) => {
  return (
    <CardWrapper className="weeklyActivity">
      <div className="titleGroup">
        <h2>{title}</h2>
      </div>
      <div className="cardContainer">
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </CardWrapper>
  );
};

export default DashboardPage;
