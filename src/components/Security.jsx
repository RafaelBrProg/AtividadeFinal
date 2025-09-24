import React from 'react';
import styles from './Security.module.css';

const Security = () => {
  return (
    <section id="security">
      <div className="container">
        <h2>Segurança de Elite </h2>
        <div className={styles.securityGrid}>
          <div className="card">
            <h3>Validação Rigorosa</h3>
            <p>
              Toda entrada de dados é validada com Joi ou express-validator. Emails, senhas e dados numéricos passam por verificação científica antes do processamento, garantindo que nenhuma anomalia dimensional corrompa nosso sistema.
            </p>
          </div>
          <div className="card">
            <h3>Controle de Acesso</h3>
            <p>
              Implementamos um sistema RBAC para distinguir usuários comuns de administradores do Conselho da Cidadela. Apenas perfis autorizados podem gerenciar o catálogo interdimensional, mantendo o poder nas mãos certas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;