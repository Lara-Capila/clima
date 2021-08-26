import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClimaContext from './ClimaContext';

function ClimaProvider({ children }) {
  const [cityName, setCityName] = useState({});
  const [dataResult, setDataResult] = useState({
    city: null,
    date: null,
    temp: null,
    description: null,
    humidity: null,
    wind_speedy: null,
    forecast: [],
  });
  const [isLocation, setLocation] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const context = {
    cityName,
    setCityName,
    dataResult,
    setDataResult,
    isLocation,
    setLocation,
    isLoading,
    setLoading,
  };

  return (
    <ClimaContext.Provider value={ context }>
      { children }
    </ClimaContext.Provider>
  );
}

ClimaProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ClimaProvider;
