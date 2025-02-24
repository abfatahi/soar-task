import { cards } from "../data/cards";

const getCards = () => {
  return new Promise((resolve) => {
    resolve({ data: cards });
  }, 500);
};

export { getCards };
