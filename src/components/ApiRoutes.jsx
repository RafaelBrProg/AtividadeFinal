import React from 'react';
import styles from './ApiRoutes.module.css';

const ApiRoutes = () => {
    return (
        <section id="api-routes">
            <div className="container">
                <h2>Rotas da API </h2>
                <div className={styles.table}>
                    <div className={styles.row}>
                        <div className={`${styles.cell} ${styles.header}`}>Autenticação</div>
                        <div className={`${styles.cell} ${styles.header}`}>Gerenciamento de Produtos</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.cell}>POST /auth/login e /users/register para acesso seguro.</div>
                        <div className={styles.cell}>CRUD completo em /products com controle administrativo.</div>
                    </div>
                    <div className={styles.row}>
                        <div className={`${styles.cell} ${styles.header}`}>Carrinho Inteligente</div>
                        <div className={`${styles.cell} ${styles.header}`}>Sistema de Pedidos</div>
                    </div>
                     <div className={styles.row}>
                        <div className={styles.cell}>POST/PUT/DELETE em /cart para manipulação dinâmica.</div>
                        <div className={styles.cell}>POST/GET em /orders com controle de estoque e histórico.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ApiRoutes;