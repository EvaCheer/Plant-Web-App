export const getDaysSince = (date) => {
    if (date === undefined || date === null) {
        return undefined;
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - date.getTime()) / millisecondsPerDay);
}

export const getWateredText = (date) => {
  const days = getDaysSince(date);

  if (days === undefined) {
    return "Never watered";
  }

  if (days === 0) {
    return "Today";
  }

  if (days === 1) {
    return "Yesterday";
  }

  return `${days} days ago`;
};