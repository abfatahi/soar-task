import { userDetails } from "../data/user";

const getUserDetails = () => {
  return new Promise((resolve) => {
    resolve({ data: userDetails });
  }, 500);
};

export { getUserDetails };
