import React from 'react';

const TechStack = () => {
  return (
    <section id="tech-stack">
      <div className="container">
        <h2>Stack Tecnológico </h2>
        <div className="grid-3-col">
          <div className="card">
            <h3>Node.js & Express </h3>
            <p>Framework robusto para construir APIs escaláveis, perfeito para gerenciar pedidos interdimensionais com alta performance. </p>
          </div>
          <div className="card">
            <h3>MongoDB (NoSQL) </h3>
            <p>Banco de dados não relacional ideal para estruturas flexíveis, permitindo armazenar produtos com características únicas. </p>
          </div>
          <div className="card">
            <h3>JWT & Bcrypt</h3>
            <p>Segurança de nível científico com tokens JWT para autenticação e bcrypt para criptografia de senhas, uma proteção digna do Conselho da Cidadela. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;