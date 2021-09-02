import React, { useContext } from 'react';

import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import ClimaContext from '../context/ClimaContext';
import Footer from './Footer';
import '../styles/climate.css';

const styleArrow = { color: 'red', fontSize: '1.5em' };

function ClimateResult() {
  const { dataResult } = useContext(ClimaContext);
  console.log(dataResult);

  return (
    <section className="climate-container">
      <section>
        <hr />
        <section className="city-county-title">
          { dataResult.name }
          { ', ' }
          { dataResult.sys.country }
          { ' ' }
        </section>
        <h1 className="temp-desc-title">
          { `${dataResult.main.temp}°C` }
          { ' ' }
          { dataResult.weather[0].description }
        </h1>
        { ' ' }
        { dataResult.main.temp_max }
        <BsArrowUp style={ styleArrow } />
        { ' ' }
        { dataResult.main.temp_min }
        <BsArrowDown style={ styleArrow } />
        <section className="container-flex">
          <p className="paragraph-data">
            Sensação:
            { ' ' }
            { `${dataResult.main.feels_like} °C` }
          </p>
          <p className="paragraph-data">
            Humidade:
            { ' ' }
            { `${dataResult.main.humidity}%` }
          </p>
          <p className="paragraph-data">
            Vento:
            { ' ' }
            { `${dataResult.wind.speed}km/h` }
          </p>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default ClimateResult;
