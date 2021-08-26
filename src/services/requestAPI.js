export async function fetchWeather(cityName) {
  const config = {
    method: 'GET',
  };

  const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=0a2da579&city_name=${cityName}`, config);
  const data = await response.json();
  return data;
}

export async function fetchWeatherWithLocation(lat, long) {
  const config = {
    method: 'GET',
  };

  const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=0a2da579&lat=${lat}&lon=${long}&user_ip=remote`, config);
  const data = await response.json();
  return data;
}
