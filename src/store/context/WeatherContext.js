import React, { createContext, useState } from 'react';

const WeatherContext = createContext({
  weather: null,
  setWeather: () => {},
  getWeather: async () => {},
});

const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const getWeather = async weatherData => {
    setWeather(weatherData);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
export { WeatherContext };
