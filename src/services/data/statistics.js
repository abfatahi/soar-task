const weeklyActivities = [
  {
    day: "saturday",
    activities: [
      { type: "deposit", amount: "250" },
      { type: "withdraw", amount: "480" },
    ],
  },
  {
    day: "sunday",
    activities: [
      { type: "deposit", amount: "120" },
      { type: "withdraw", amount: "370" },
    ],
  },
  {
    day: "monday",
    activities: [
      { type: "deposit", amount: "310" },
      { type: "withdraw", amount: "270" },
    ],
  },
  {
    day: "tuesday",
    activities: [
      { type: "deposit", amount: "380" },
      { type: "withdraw", amount: "480" },
    ],
  },
  {
    day: "wednessday",
    activities: [
      { type: "deposit", amount: "240" },
      { type: "withdraw", amount: "170" },
    ],
  },
  {
    day: "thursday",
    activities: [
      { type: "deposit", amount: "230" },
      { type: "withdraw", amount: "400" },
    ],
  },
  {
    day: "friday",
    activities: [
      { type: "deposit", amount: "380" },
      { type: "withdraw", amount: "400" },
    ],
  },
];

const expensesPercentage = [
  { category: "Entertainment", value: 30 },
  { category: "Investment", value: 20 },
  { category: "Others", value: 35 },
  { category: "Bill Expense", value: 15 },
];

export { weeklyActivities, expensesPercentage };
