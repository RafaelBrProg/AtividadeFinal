import React from 'react';

const DatabaseModel = () => {
  return (
    <section id="database-model">
      <div className="container">
        <h2>Modelagem NoSQL Inteligente </h2>
        <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h3>Estratégia de Dados</h3>
            <p>
                A modelagem NoSQL permite flexibilidade para produtos únicos de diferentes dimensões. As informações dos produtos são embarcadas (embedded) nos pedidos para manter a consistência histórica, mesmo que o produto original seja apagado por um Cronenberg.
            </p>
            <ul style={{textAlign: 'left', display: 'inline-block', marginTop: '1rem'}}>
                <p> Produtos com atributos dinâmicos </p>
                <p> Histórico de pedidos totalmente preservado </p>
                <p> Consultas otimizadas para viagens rápidas </p>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default DatabaseModel;