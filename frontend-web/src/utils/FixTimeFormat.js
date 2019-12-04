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
    return `${dateTimeFormat.getDate()}-${dateTimeFormat.getMonth()}-${dateTimeFormat.getFullYear()}`;
  } else if (typeOfFormat === "time") {
    //return time without timezone
    return `${dateTimeFormat.toTimeString().split(" ")[0]} ${
      dateTimeFormat.getHours >= 12 ? "pm" : "am"
    }`;
  }
};
