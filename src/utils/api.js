const apiKey = "6a8646774af02998e633e674fbacc2d6";

export const getCity = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ru`;
};
