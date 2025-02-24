const maskCardNumber = (cardNumber) => {
  return cardNumber.replace(/^(\d{4})\d{8}(\d{4})$/, "$1 ****  **** $2");
};

export { maskCardNumber };
