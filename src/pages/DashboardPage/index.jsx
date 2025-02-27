import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DashboardLayout } from "@components/layouts";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";
import { Link } from "react-router-dom";
import { CreditCard, TransactionCard } from "@/components/molecules";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import ExpensesStatisticsChart from "./components/ExpensesStatisticsChart";
import BalanceHistory from "./components/BalanceHistory";
import QuickTransfer from "./components/QuickTransfer";

import { transactionSelector } from "@/redux/reducers/transactions";
import { getCards } from "@/services/apis/cards";
import { getBeneficiaries } from "@/services/apis/transactions";
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

function DashboardPage() {
  const [cards, setCards] = useState([]);
  const [weeklyActivities, setWeeklyActivities] = useState({});
  const [expensesStatistics, setExpensesStatistics] = useState({});
  const [balanceHistory, setBalanceHistory] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);

  const { transfers } = useSelector(transactionSelector);
  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
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

    getBeneficiaries().then((res) => {
      setBeneficiaries(res.data);
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
                {transfers?.slice(0, 3).map((transfer, index) => (
                  <TransactionCard key={`transaction-${index}`} {...transfer} />
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
          <div className="sectionGroupReverse">
            <ChartGroup title={overviewPageContent.quickTransfer}>
              <QuickTransfer beneficiaries={beneficiaries} />
            </ChartGroup>

            <ChartGroup title={overviewPageContent.balanceHistory}>
              <BalanceHistory balanceHistory={balanceHistory} />
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
