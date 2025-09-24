import React from 'react';
import styles from './MongoInstructions.module.css';

const MongoInstructions = ({ pdfLink, children }) => {
  return (
    <div className={styles.instructionsContainer}>
      <h4>Passo a Passo (Back-end com MongoDB)</h4>
      {children}
      <a 
        href={pdfLink || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${styles.pdfButton}`}
      >
        Ver o Passo a Passo Completo (PDF)
      </a>
    </div>
  );
};

export default MongoInstructions;