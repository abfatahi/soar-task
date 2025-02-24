import { expensesPercentage, weeklyActivities } from "../data/statistics";

const getWeeklyActivities = () => {
  return new Promise((resolve) => {
    resolve({ data: weeklyActivities });
  }, 500);
};

const getExpensesPercentage = () => {
  return new Promise((resolve) => {
    resolve({ data: expensesPercentage });
  }, 500);
};

export { getWeeklyActivities, getExpensesPercentage };
