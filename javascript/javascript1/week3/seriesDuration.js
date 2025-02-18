const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "The Squid Game",
    days: 0,
    hours: 8,
    minutes: 0,
  },
  {
    title: "Money Heist",
    days: 2,
    hours: 8,
    minutes: 31,
  },
];

function logOutSeriesText() {
  const avgLifeSpanInYrs = 80;
  //covert to minutes
  const lifeSpanInMins = avgLifeSpanInYrs * 8760 * 60; //42048000 mins

  for (let series of seriesDurations) {
    const title = series.title;
    const days = series.days;
    const hours = series.hours;
    const minutes = series.minutes;
    const totalTimeSpentInMin = (days * 24 + hours) * 60 + minutes;
    const percent = (totalTimeSpentInMin / lifeSpanInMins) * 100;
    console.log(`${title} took ${percent.toFixed(3)}% of my life`);
  }
}

logOutSeriesText();
