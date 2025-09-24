import React, { useState } from 'react';
import Modal from './Modal';
import MongoInstructions from './MongoInstructions';

const Features = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setShowRegisterModal(true);
    };

  return (
    <>
        <section id="features">
            <div className="container">
                <h2>Funcionalidades do Portal</h2>
                <p>Aqui vocês encontram as instruções para atender ao item: 2.1. Usuários e Autenticação, onde vocês devem implementar as seguintes funcionalidades:</p>
                <div className="grid-3-col">
                <div className="card">
                    <h3>Sistema de Usuários</h3>
                    <ul>
                    <li>Cadastro, login e perfil de cientistas</li>
                    <li>Registro seguro com JWT</li>
                    <li>Perfis personalizados</li>
                    </ul>
                    <form onSubmit={handleRegisterSubmit} style={{marginTop: '20px'}}>
                        <input type="text" placeholder="Nome" required style={{width: '90%', padding: '10px', marginBottom: '10px'}}/>
                        <input type="email" placeholder="Email" required style={{width: '90%', padding: '10px', marginBottom: '10px'}}/>
                        <input type="password" placeholder="Senha" required style={{width: '90%', padding: '10px', marginBottom: '10px'}}/>
                        <button type="submit" className="btn">Cadastrar</button>
                    </form>
                </div>
                <div className="card">
                    <h3>Catálogo de Produtos</h3>
                    <ul>
                      <li>Produtos exóticos de todas as dimensões</li>
                      <li>Gerenciamento completo (CRUD)</li>
                      <li>Filtros por categoria</li>
                      <li>Paginação inteligente</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Carrinho Quântico</h3>
                    <ul>
                      <li>Adição instantânea de itens</li>
                      <li>Controle de quantidades</li>
                      <li>Sincronização dimensional</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>

        <Modal
            show={showRegisterModal}
            onClose={() => setShowRegisterModal(false)}
            title="Guia de Integração: Cadastro de Usuário"
        >
            <p>A rota de cadastro é o primeiro passo para um novo cientista se juntar à aventura.</p>
            <ul>
                <li><strong>Endpoint:</strong> <code>POST /users/register</code></li>
                <li><strong>Segurança:</strong> A senha deve ser criptografada com `bcrypt` antes de salvar.</li>
            </ul>
             <MongoInstructions pdfLink="doces-interdimensionais/src/assets/guiacompleto.pdf">
                <ul>
                    <li><strong>1. Modelagem:</strong> Crie um Schema no Mongoose para <code>User</code> com os campos <code>name</code>, <code>email</code> e <code>password</code>.</li>
                    <li><strong>2. Conexão:</strong> Na sua rota, receba os dados do <code>req.body</code>.</li>
                    <li><strong>3. Operação no Banco:</strong> Antes de salvar, gere um hash da senha com <code>bcrypt.hash()</code>. Depois, use <code>User.create()</code> para inserir o novo documento no MongoDB.</li>
                </ul>
            </MongoInstructions>
        </Modal>
    </>
  );
};

export default Features;