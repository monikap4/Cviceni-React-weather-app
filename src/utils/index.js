const months = [
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
};

export const convertTimestamp = (unixTimestamp) => {
  const dateObj = new Date(unixTimestamp * 1000);

  // Get hours from the timestamp
  const hours = dateObj.getHours();
  
  // Get minutes part from the timestamp
  const minutes = dateObj.getMinutes();
  
  // Get seconds part from the timestamp
  const seconds = dateObj.getSeconds();
  
  const formattedTime = hours.toString().padStart(2, '0') + ':' + 
                  minutes.toString().padStart(2, '0') + ':' + 
                  seconds.toString().padStart(2, '0');

  return formattedTime;
};

export const filterForecast = (array) => {
    return array.filter((_, index) => index % 8 === 0);
};

