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

export const formatDate = (date) => {
  if (!date) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}