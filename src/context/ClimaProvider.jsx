import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClimaContext from './ClimaContext';

function ClimaProvider({ children }) {
  const [cityName, setCityName] = useState();
  const context = {
    cityName,
    setCityName,
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
