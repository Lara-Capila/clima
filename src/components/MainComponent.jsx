import React, { useContext } from 'react';

import ClimaContext from '../context/ClimaContext';
import { fetchWeather } from '../services/requestAPI';
import ClimateResult from './Climate';
import '../styles/mainContent.css';

function MainComponent() {
  const {
    cityName,
    setCityName,
    setDataResult,
    setLoading,
    dataResult,
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
          setDataResult(res);
          setLoading(true);
        });
    }, 2000);
  }

  console.log(dataResult);
  return (
    <section className="main-content-container">
      <section className="header-page">
        <h1 className="title-page">Previsão do tempo</h1>
        <input
          className="inputCityName"
          type="text"
          name="inputCity"
          placeholder="Insira o nome da cidade"
          onChange={ handleChangeInput }
          autoComplete="off"
        />
        <button
          type="button"
          className="iconSearch"
          onClick={ handleClick }
        >
          <i className="fa fa-search" aria-hidden="true" />
        </button>

      </section>
      { dataResult ? (<ClimateResult />) : null }
    </section>
  );
}

export default MainComponent;
