import React from 'react';

const FinalPresentation = () => {
  return (
    <section id="final-presentation">
      <div className="container">
        <h2>Apresentação Final </h2>
        <div className="grid-3-col">
          <div className="card">
            <h3>1. Arquitetura e Tecnologias</h3>
            <p>Explicação detalhada da estrutura do projeto e justificativa da modelagem NoSQL escolhida para o e-commerce.</p>
          </div>
          <div className="card">
            <h3>2. Demonstração Prática</h3>
            <p>Show ao vivo da API funcionando com o front-end! Cadastro, login, carrinho e pedidos em ação real.</p>
          </div>
          <div className="card">
            <h3>3. Reflexões e Aprendizados</h3>
            <p>Compartilhamento dos desafios enfrentados e conhecimentos adquiridos durante esta jornada interdimensional.</p>
          </div>
        </div>
        <div style={{marginTop: '3rem'}}>
            <h4>
                Data de entrega: 02/10/2025 - Preparem-se para surpreender o multiverso!
            </h4>
        </div>
      </div>
    </section>
  );
};

export default FinalPresentation;