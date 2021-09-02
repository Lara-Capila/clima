import React, { useContext } from 'react';

import ClimaContext from '../context/ClimaContext';

import '../styles/loading.css';

function Loading() {
  const { isLoading } = useContext(ClimaContext);
  return (
    <div className="loader" hidden={ isLoading } />
  );
}

export default Loading;
