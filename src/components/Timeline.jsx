import React from 'react';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="container">
        <h2>Cronograma de Desenvolvimento </h2>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNumber}>1</div>
            <div className={styles.timelineContent}>
              <h3>Configuração</h3>
              <p>Setup do ambiente, estrutura do projeto, configuração do MongoDB e implementação das rotas básicas de autenticação.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNumber}>2</div>
            <div className={styles.timelineContent}>
              <h3>Core Features</h3>
              <p>Desenvolvimento do CRUD de produtos, sistema de carrinho e implementação das validações de segurança com JWT.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNumber}>3</div>
            <div className={styles.timelineContent}>
              <h3>Finalização</h3>
              <p>Sistema de pedidos, testes, documentação completa e preparação para a apresentação final interdimensional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;