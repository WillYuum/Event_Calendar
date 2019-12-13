import dateFormat from "dateformat";

export const getDaysRange = (startDate, endDate) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const oneDay = 24 * 60 * 60 * 1000;

  const daysRange = Math.round(Math.abs((startDate - endDate) / oneDay));
  return daysRange;
};

export const getSpecificDate = async date => {
  console.log(date);
  let imprecise = new Date(date);
  imprecise.setDate(imprecise.getDate() - 1);

  console.log("date", imprecise);
  const preciseDate = (dateFormat(imprecise, "yy-mm-dd"))
  console.log(String(preciseDate));
  return {
      endDate: preciseDate
  };
  // return dateFormat(imprecise, "yy mm dd")
};
