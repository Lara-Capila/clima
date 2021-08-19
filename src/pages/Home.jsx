import React, { useContext, useEffect } from 'react';

import { BsSearch } from 'react-icons/bs';
import ClimaContext from '../context/ClimaContext';
import fetchWeather from '../services/requestAPI';

function HomePage() {
  const { cityName, setCityName } = useContext(ClimaContext);

  function handleChangeInput({ target: { value } }) {
    setCityName({ ...cityName, value });
  }

  useEffect(() => {
    function getCityName() {
      fetchWeather(cityName);
    }
    getCityName();
  }, [cityName]);

  return (
    <section>
      <h1>Previsão do tempo</h1>
      <input
        type="text"
        name="inputCity"
        placeholder="Pesquise aqui o nome da cidade"
        onChange={ handleChangeInput }
      />
      <BsSearch />
    </section>
  );
}

export default HomePage;
