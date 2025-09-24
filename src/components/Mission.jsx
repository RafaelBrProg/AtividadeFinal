import React, { useState } from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  const [clickStage, setClickStage] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleSillyClick = () => {
    if (clickStage === 2) {
      setAnimationClass(styles.vortexOut);
    }
    setClickStage(clickStage + 1);
  };

  const buttonTexts = [
    "Não clique aqui",
    "Você tem certeza que quer clicar aqui?",
    "Olha lá hein... eu avisei",
  ];

  return (
    <section id="mission" className={styles.missionSection}>
      <div className={`container ${styles.missionContainer}`}>
        
        <div className={styles.portalBackground}></div>

        <h2>Sua Missão Interdimensional</h2>

        <div className={`${styles.textContent} ${animationClass}`}>
          <p>
            Bem-vindos, jovens desenvolvedores! Vocês foram convocados pelo Conselho dos Ricks para criar o backend de um e-commerce que venderá os produtos mais exóticos das 137 dimensões catalogadas.
          </p>
          <p>
            Sua missão é construir a API RESTful para este portal. Abaixo estão os principais módulos que você precisa desenvolver:
          </p>

          <hr style={{borderColor: '#444', margin: '2rem 0'}} />

          <h4>Requisitos Funcionais Principais:</h4>
          
          <h5>Usuários e Autenticação</h5>
          <ul>
              <li>Implementar o CRUD completo de usuários e as rotas de autenticação com JWT.</li>
          </ul>

          <h5>Produtos</h5>
          <ul>
              <li>Implementar o CRUD completo de produtos, com acesso restrito para administradores.</li>
          </ul>
          
          <h5>Carrinho de Compras</h5>
          <ul>
              <li>Criar rotas para adicionar, visualizar, atualizar e remover itens do carrinho do usuário logado.</li>
          </ul>

          <h5>Pedidos</h5>
          <ul>
              <li>Desenvolver a lógica para criar um novo pedido a partir do carrinho e para listar o histórico de compras.</li>
          </ul>

          <a 
            href="/Trabalho final.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn ${styles.detailsButton}`}
          >
            Veja os requisitos não funcionais e a descrição detalhada das tarefas aqui
          </a>
        </div>
        
        {clickStage < 3 && (
          <button onClick={handleSillyClick} className={`btn ${styles.sillyButton}`}>
            {buttonTexts[clickStage]}
          </button>
        )}
      </div>
    </section>
  );
};

export default Mission;
