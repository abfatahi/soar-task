const transformBalanceHistoryData = (balanceHistory) => {
  const categories = balanceHistory.map((entry) => entry.date);
  const data = balanceHistory.map((entry) => entry.amount);

  return { categories, data };
};

export { transformBalanceHistoryData };
