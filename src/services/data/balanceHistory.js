const balanceHistory = [];

const generateMonthData = (startDate, endDate, minAmount, maxAmount, peakDay) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end - start;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  for (let i = 0; i <= daysDiff; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);

    const amplitude = (maxAmount - minAmount) / 2;
    const offset = minAmount + amplitude;
    const amount = Math.round(
      amplitude * Math.sin((i / daysDiff) * 2 * Math.PI) + offset
    );

    balanceHistory.push({
      date: currentDate.toISOString().split("T")[0], 
      amount: amount,
    });
  }
};

// Generate - data for each month with specific peaks
generateMonthData("2021-07-01", "2021-07-31", 100, 560, 15); // July
generateMonthData("2021-08-01", "2021-08-31", 250, 480, 10); // August
generateMonthData("2021-09-01", "2021-09-30", 450, 800, 20); // September
generateMonthData("2021-10-01", "2021-10-31", 200, 800, 15); // October
generateMonthData("2021-11-01", "2021-11-30", 200, 590, 10); // November
generateMonthData("2021-12-01", "2021-12-31", 250, 590, 20); // December
generateMonthData("2022-01-01", "2022-01-31", 250, 640, 15); // January

export { balanceHistory };
