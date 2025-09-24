import React from 'react';
import styles from './StudyMaterials.module.css';

const StudyMaterials = () => {
  const materials = [
    { name: 'Guia Completo da Atividade', file: 'guiacompleto.pdf' },
    { name: 'Fundamentos do Backend - Parte 1', file: 'Fundamentos do Backend  (1).pdf' },
    { name: 'Fundamentos do Backend - Parte 2', file: '_Fundamentos do Backend - Parte 2 (1).pdf' },
    { name: 'Introdução ao NoSQL com MongoDB', file: 'Bancos-de-Dados-NoSQL-Do-Conceito-ao-MongoDB.pdf' },
    { name: 'MongoDB - Operações CRUD', file: 'MongoDB-Fundamentos-Funcionalidades-e-Operacoes-CRUD.pdf' },
    { name: 'Modelagem com Prisma', file: 'Aula 05- Modelagem de dados com Prisma (1).pdf' },
    { name: 'Segurança para Desenvolvedores', file: 'Segurança para desenvolvedores web (John Paul Mueller).pdf' },
  ];

  return (
    <section id="study-materials">
      <div className="container">
        <h2>Materiais de Estudo Interdimensional</h2>
        <p>Revise aqui todas as aulas que tivemos para aniquilar esta atividade, ou veja o guia completo para um atalho dimensional.</p>
        <div className={styles.buttonsContainer}>
          {materials.map((material, index) => (
            <a 
              key={index}
              href={`/${material.file}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn ${styles.materialButton}`}
            >
              {material.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;