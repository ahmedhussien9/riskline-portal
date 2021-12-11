const format = {
  min: "Mintue ago",
  hours: "Hours ago",
  days: "days ago",
  weeks: " weeks ago",
  months: " months ago",
  now: " now",
  over: " Over one year",
};

const times = {
  min: 60,
  hour: sq(60),
  day: sq(60) * 24,
  week: sq(60) * 24 * 7,
  month: sq(60) * 24 * 7 * 4,
  year: sq(60) * 24 * 7 * 4 * 12,
};

export const getTimeFormat = (date) => {
  if (!date) return "";
  var d = new Date(date),
    diff = (Date.now() - d.getTime()) / 1000;
  if (diff < times.min) {
    return format.now;
  } else if (diff < times.hour) {
    return Math.floor(diff / times.min) + format.min;
  } else if (diff < times.day) {
    return Math.floor(diff / times.hour) + format.hours;
  } else if (diff < times.week) {
    return Math.floor(diff / times.day) + format.days;
  } else if (diff < times.month) {
    return Math.floor(diff / times.week) + format.weeks;
  } else if (diff < times.year) {
    return Math.floor(diff / times.month) + format.months;
  }
  return format.over;
};

function sq(num) {
  return num * num;
}
