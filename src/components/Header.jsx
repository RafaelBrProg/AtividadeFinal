import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from './Modal';
import MongoInstructions from './MongoInstructions';

import heroBanner from '../assets/rick-and-morty-banner.jpg';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleExplore = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={styles.header} style={{ backgroundImage: `url(${heroBanner})` }}>
        
        <div className={styles.cartContainer} onClick={() => setShowCartModal(true)}>
          <svg className={styles.cartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span className={styles.cartBadge}>3</span>
        </div>
        
        <div className={styles.overlay}>
          <div className="container">
            <h1 className={styles.title}>Loja Interdimensional</h1>
            <p className={styles.subtitle}>O e-commerce mais cachorro do multiverso Rick e Morty</p>
            <div>
              <button onClick={handleExplore} className="btn">Explorar Produtos</button>
              <button onClick={() => setShowLoginModal(true)} className={`btn ${styles.portalBtn}`}>Entrar no Portal</button>
            </div>
          </div>
        </div>
      </header>
      
      <Modal 
        show={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        title="Guia de Integração: Login de Usuário"
      >
        <p>Para conectar o login, seu backend precisa de uma rota que autentique o usuário.</p>
        <ul>
            <li><strong>Endpoint:</strong> <code>POST /auth/login</code></li>
            <li><strong>Resposta de Sucesso:</strong> A API deve retornar um token JWT. Ex: <code>{`{ "token": "seu.jwt.aqui" }`}</code></li>
        </ul>
        <MongoInstructions pdfLink="/autenticação.pdf">
            <ul>
                <li><strong>1. Modelagem:</strong> Reutilize o Schema de <code>User</code> já criado.</li>
                <li><strong>2. Conexão:</strong> Na sua rota, receba <code>email</code> e <code>password</code> do corpo da requisição.</li>
                <li><strong>3. Operação no Banco:</strong> Use <code>User.findOne(&#123; email &#125;)</code> para buscar o usuário no MongoDB.</li>
                <li><strong>4. Validação:</strong> Se o usuário for encontrado, compare a senha enviada com a senha hashada no banco usando <code>bcrypt.compare()</code>.</li>
            </ul>
        </MongoInstructions>
      </Modal>

      <Modal
        show={showCartModal}
        onClose={() => setShowCartModal(false)}
        title="Guia de Integração: Visualizar Carrinho"
      >
        <p>Para exibir os itens do carrinho, sua API precisa de uma rota que retorne o conteúdo completo do carrinho do usuário logado.</p>
        <ul>
          <li><strong>Endpoint:</strong> <code>GET /cart</code></li>
          <li><strong>Autenticação:</strong> Rota protegida. O token JWT deve ser enviado no Header.</li>
          <li><strong>Resposta de Sucesso:</strong> Um objeto com os itens e o total. Ex: <br/><code>{`{ items: [ ... ], total: 31.0 }`}</code></li>
        </ul>
        <MongoInstructions pdfLink="/produtos.pdf">
            <ul>
                <li><strong>1. Modelagem:</strong> Adicione um campo <code>cart</code> ao seu Schema de <code>User</code>. Ex: <code>cart: [ productId: ObjectId, quantity: Number ]</code>.</li>
                <li><strong>2. Conexão:</strong> Obtenha o ID do usuário a partir do token JWT validado.</li>
                <li><strong>3. Operação no Banco:</strong> Use <code>User.findById(userId).populate('cart.productId')</code>. O método <code>.populate()</code> é essencial para buscar os detalhes completos de cada produto (nome, preço, etc.).</li>
            </ul>
        </MongoInstructions>
      </Modal>
    </>
  );
};

export default Header;