import React, { useContext } from 'react';

import { BsSearch } from 'react-icons/bs';
import ClimaContext from '../context/ClimaContext';
import { fetchWeather } from '../services/requestAPI';
import ClimateResult from './Climate';

function MainComponent() {
  const {
    cityName,
    setCityName,
    setDataResult,
    setLoading,
  } = useContext(ClimaContext);

  function handleChangeInput({ target: { value } }) {
    setCityName({ ...cityName, value });
  }

  function handleClick() {
    setDataResult(null);
    setLoading(false);
    setTimeout(() => {
      fetchWeather(encodeURIComponent(Object.values(cityName)))
        .then((res) => {
          setDataResult(res.results);
          setLoading(true);
        });
    }, 3000);
  }
  return (
    <section>
      <h1>Previsão do tempo</h1>
      <input
        type="text"
        name="inputCity"
        placeholder="Pesquise aqui o nome da cidade"
        onChange={ handleChangeInput }
      />
      <BsSearch onClick={ handleClick } />
      <ClimateResult />
    </section>
  );
}

export default MainComponent;
