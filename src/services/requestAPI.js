export async function fetchWeather(cityName) {
  const config = {
    method: 'GET',
  };

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_OPEN_WHEATHER_KEY}&lang=pt_br&units=metric`, config);
  const data = await response.json();
  return data;
}

export async function fetchWeatherWithLocation(lat, long) {
  const config = {
    method: 'GET',
  };

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPEN_WHEATHER_KEY}&lang=pt_br&units=metric`, config);
  const data = await response.json();
  return data;
}
