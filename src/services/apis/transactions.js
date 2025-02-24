import { beneficiaries, transactions } from "../data/transactions";

const getTransactions = () => {
  return new Promise((resolve) => {
    resolve({ data: transactions });
  }, 500);
};

const getBeneficiaries = () => {
  return new Promise((resolve) => {
    resolve({ data: beneficiaries });
  }, 500);
};

export { getTransactions, getBeneficiaries };
