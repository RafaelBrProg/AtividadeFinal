import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>"Wubba Lubba Dub Dub!"</p>
        <p>&copy; 2025 Loja Interdimensional. Conselho da Cidadela. Todos os direitos reservados.</p>
        <p className={styles.gammaCredit}>Feito pela Profª Alina da dimensão C-137 para avaliação da UC-13 Desenvolvimento Backend.</p>
      </div>
    </footer>
  );
};

export default Footer;