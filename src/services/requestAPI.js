async function fetchWeather(cityName) {
  const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };

  const response = await fetch(`https://api.hgbrasil.com/weather?key=0a2da579&city_name=${cityName}`, config);
  const data = await response.json();

  console.log(data.results);
}

export default fetchWeather;
