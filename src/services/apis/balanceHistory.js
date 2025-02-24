import { balanceHistory } from "../data/balanceHistory";

const getBalanceHistory = () => {
  return new Promise((resolve) => {
    resolve({ data: balanceHistory });
  }, 500);
};

export { getBalanceHistory };
