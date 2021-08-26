import React, { useContext } from 'react';

import ClimaContext from '../context/ClimaContext';

import '../style/loading.css';

function Loading() {
  const { isLoading } = useContext(ClimaContext);
  return (
    <div className="loader" hidden={ isLoading } />
  );
}

export default Loading;
