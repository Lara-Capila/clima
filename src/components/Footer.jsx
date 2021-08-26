import React from 'react';

function Footer() {
  const now = new Date();
  const monName = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'Maio',
    'junho',
    'agosto',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return (
    <p>
      Consulta realizada em
      { ' ' }
      {
        `${now.getDate()}
        de ${monName[now.getMonth()]}
        de ${now.getFullYear()}
        ás ${now.getHours()}:${now.getMinutes()}`
      }
    </p>
  );
}

export default Footer;
