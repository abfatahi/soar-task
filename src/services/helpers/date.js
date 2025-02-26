function formatDate(dateString) {
  const newDateString =
    dateString === "" || dateString === null ? "1990-01-01" : dateString;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(newDateString)) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }

  const [year, month, day] = newDateString.split("-");
  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date.");
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[date.getMonth()];
  return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
}

export { formatDate };
