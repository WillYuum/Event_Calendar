import dateFormat from "dateformat";

export const getDaysRange = async (startDate, endDate) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const oneDay = 24 * 60 * 60 * 1000;

  const daysRange = Math.round(Math.abs((startDate - endDate) / oneDay));
  console.log(daysRange)
  return await daysRange;
};

/**
 * @function getSpecificDate - Date provided by Full Calndar would add extra day
 * for calendar reason, to fix this we get get the last day and minus it by one
 * @param {Date} date -date format that would look like (Sun Dec 08 2019 03:30:00)
 * @return {Date} - we return the date in this format(Year-month-day) in digit
 */
export const getSpecificDate = async date => {
  // await console.log("ayre", date);
  // let impreciseDate = await new Date(date);
  // await console.log("moza", impreciseDate)
  // await impreciseDate.setDate(impreciseDate.getDate() - 1);
  return date
  // const x = await dateFormat(impreciseDate, "yy-mm-dd")
  // await console.log("WTF", x)
  // return await x
  // return dateFormat(imprecise, "yy mm dd")
};
