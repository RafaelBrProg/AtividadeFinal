import React, { useState } from 'react';
import Modal from './Modal';
import MongoInstructions from './MongoInstructions';
import styles from './SpecialProducts.module.css';

const SpecialProducts = () => {
    const [showCartModal, setShowCartModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Chaveiro Portal', img: '/src/assets/chaveiro.webp' },
        { id: 2, name: 'Caneca Cósmica', img: '/src/assets/canecas.webp' },
        { id: 3, name: 'Caneca Morty Assustado', img: '/src/assets/canecamorty.webp' },
        { id: 4, name: 'Caderno Interdimensional', img: '/src/assets/caderno.avif' },
        { id: 5, name: 'Plumbus Standard', img: '/src/assets/doces.jpg' }, 
        { id: 6, name: 'Sementes de Mega Árvores', img: '/src/assets/semestes.webp' },
        { id: 7, name: 'Amostra Mr. Meeseeks', img: '/src/assets/meeseeks.jpg' },
        { id: 8, name: 'Picles do Rick', img: '/src/assets/picles.webp' }, 
    ];

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        setShowCartModal(true);
    };

    return (
    <>
        <section id="products">
            <div className="container">
                <h2>Produtos Especiais do Multiverso</h2>
                <p>
                De Squanch Drops a Plumbus Gummies, nossa seleção inclui os doces mais bizarros e deliciosos de todas as 137 dimensões catalogadas pelo Rick C-137!
                </p>
                
                <div className={styles.productGrid}>
                    {products.map(product => (
                        <div key={product.id} className={`card ${styles.productCard}`}>
                            <div className={styles.cardContent}>
                                <img src={product.img} alt={product.name} className={styles.productImage} />
                                <h3>{product.name}</h3>
                            </div>
                            <button onClick={() => handleAddToCartClick(product)} className="btn">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Modal
            show={showCartModal}
            onClose={() => setShowCartModal(false)}
            title={`Guia de Integração: Adicionar ao Carrinho`}
        >
            <p>Sua API precisa de uma rota que adicione um produto ao carrinho do usuário logado.</p>
            <ul>
                <li><strong>Endpoint:</strong> <code>POST /cart/add</code></li>
                <li><strong>Autenticação:</strong> Rota protegida. O token JWT deve ser enviado no Header.</li>
                <li><strong>Corpo da Requisição:</strong> Envie o <code>productId</code> e a <code>quantity</code>.</li>
            </ul>
            <MongoInstructions pdfLink="/produtos.pdf">
                <ul>
                    <li><strong>1. Conexão:</strong> Obtenha o <code>userId</code> do token e os dados do produto do <code>req.body</code>.</li>
                    <li><strong>2. Operação no Banco:</strong> Busque o usuário com <code>User.findById(userId)</code>.</li>
                    <li><strong>3. Lógica:</strong> Verifique se o produto já existe no array <code>cart</code> do usuário. Se sim, atualize a quantidade. Se não, use <code>.push()</code> para adicionar o novo item ao array.</li>
                    <li><strong>4. Salvar:</strong> Use o método <code>user.save()</code> para persistir as alterações no banco.</li>
                </ul>
            </MongoInstructions>
        </Modal>
    </>
    );
};

export default SpecialProducts;