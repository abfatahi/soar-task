const transactions = [
  {
    type: "debit",
    description: "Deposit from my card",
    provider: "card",
    date: "2021-01-28",
    amount: "850",
  },
  {
    type: "credit",
    description: "Deposit Paypal",
    provider: "paypal",
    date: "2021-01-25",
    amount: "2500",
  },
  {
    type: "credit",
    description: "Jemi Wilson",
    provider: "bitcoin",
    date: "2021-01-21",
    amount: "5400",
  },
];

const beneficiaries = [
  { name: "Livia Bator", accountNumber: "3000000001", title: "CEO" },
  { name: "Randy Press", accountNumber: "3000000002", title: "Director" },
  { name: "Workman", accountNumber: "3000000003", title: "Designer" },
  { name: "John Doe", accountNumber: "3000000004", title: "CFO" },
  { name: "Sarah Doe", accountNumber: "3000000005", title: "HRM" },
];

export { transactions, beneficiaries };
