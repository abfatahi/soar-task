const maskCardNumber = (cardNumber) => {
  return cardNumber.replace(/^(\d{4})\d{8}(\d{4})$/, "$1 ****  **** $2") ?? "0000 **** **** 0000";
};

const formatBalance = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(number) ?? 0;
};

export { maskCardNumber, formatBalance };
