const Days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

/**
 * @function FixDateTimeFormat - converting the datetime Format recieved from db to date
 * @param {DateTime} DateTimeFormat
 * @param {string} - Type can be "date" or "time"
 */
export const FixDateTimeFormat = (DateTimeFormat, typeOfFormat) => {
  //changing variable from string to date type
  const dateTimeFormat = new Date(DateTimeFormat);

  //checking to return date or time
  if (typeOfFormat === "date") {
    //changing the the day value from int to day in the week
    const DayInString = Days[dateTimeFormat.getDay() - 1];

    //changing the month value from int to month as string
    const MonthInString = Months[dateTimeFormat.getMonth() - 1];

    //adding the whole date to one string
    const FullDate = `${dateTimeFormat.getDay()}, ${dateTimeFormat.getFullYear()}`;

    return `${DayInString},\n ${MonthInString} ${FullDate}`;
  } else if (typeOfFormat === "time") {
    //return time without timezone
    return `${dateTimeFormat.toTimeString().split(" ")[0]} ${
      dateTimeFormat.getHours >= 12 ? "pm" : "am"
    }`;
  }
};
