import React from 'react';

import '../styles/footer.css';

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
    <footer className="footer-container">
      Consulta realizada em
      { ' ' }
      {
        `${now.getDate()}
        de ${monName[now.getMonth()]}
        de ${now.getFullYear()}
        ás ${now.getHours()}:${now.getMinutes()}`
      }
    </footer>
  );
}

export default Footer;
