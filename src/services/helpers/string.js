const maskCardNumber = (cardNumber) => {
  return (
    cardNumber.replace(/^(\d{4})\d{8}(\d{4})$/, "$1 ****  **** $2") ??
    "0000 **** **** 0000"
  );
};

const formatAmount = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(number) ?? 0;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

export { maskCardNumber, formatAmount, validateEmail, validatePassword };
