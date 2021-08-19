export default async function fetchWeather(cityName) {
  try {
    const url = `https://api.hgbrasil.com/weather?key=0a2da579&city_name=${cityName}`;
    const resp = await fetch(url);
    const jsonResp = await resp.json();
    return jsonResp;
  } catch (error) {
    console.error(error);
  }
}
