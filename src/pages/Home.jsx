import React, { useContext, useEffect } from 'react';
// import ClimateResult from '../components/Climate';
import Loading from '../components/Loading';

import MainComponent from '../components/MainComponent';
import ClimaContext from '../context/ClimaContext';
import { fetchWeatherWithLocation } from '../services/requestAPI';

function HomePage() {
  const {
    setDataResult,
    isLocation,
    setLocation,
  } = useContext(ClimaContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherWithLocation(position.coords.latitude, position.coords.longitude)
        .then((res) => setDataResult(res.results));
      setLocation(true);
    });
  }, []);
  console.log(isLocation);

  return (
    <main>
      <section>
        <MainComponent />
        <Loading />
      </section>
    </main>
  );
}

export default HomePage;
