import React, { useContext } from 'react';

import ClimaContext from '../context/ClimaContext';
import iconMax from '../images/iconMax.png';
import iconMin from '../images/iconMin.png';
import Footer from './Footer';

function ClimateResult() {
  const { dataResult } = useContext(ClimaContext);

  return (
    <section>
      <hr />
      { dataResult.city }
      { ' ' }
      { dataResult.date }
      <h1>
        { `${dataResult.temp}°C` }
        { ' ' }
        { dataResult.description }
      </h1>
      Umidade do ar:
      { ' ' }
      { `${dataResult.humidity}%` }
      <br />
      Vento:
      { ' ' }
      { dataResult.wind_speedy }
      <hr />
      { dataResult.forecast.map((result) => (
        <section key={ result.date }>
          { result.weekday }
          { ' ' }
          <img src={ iconMax } alt="icone temperatura máxima" />
          { `${result.max}°C` }
          { ' ' }
          <img src={ iconMin } alt="icone temperatura mínima" />
          { `${result.min}°C` }
        </section>
      )) }
      <Footer />
    </section>
  );
}

export default ClimateResult;
