#  Loja Interdimensional - O E-commerce Backend

Wubba Lubba Dub Dub, cientistas! Bem-vindos à sua mais nova aventura interdimensional, sancionada pelo próprio Conselho dos Ricks.

Sua missão, caso decidam não ser um Jerry e aceitá-la, é construir o motor por trás deste portal de e-commerce. O front-end já foi estabilizado e retirado de uma dimensão onde tudo é feito em React (uma dimensão bem esquisita, na verdade). Agora, cabe a vocês construir a parte inteligente da operação: a API backend que vai gerenciar usuários, produtos exóticos como Plumbus e Sementes de Mega Árvores, e garantir que nossos clientes possam finalizar seus pedidos sem "cronenbergar" o nosso estoque.

Preparem suas Pistolas de Portais, pois é hora de mostrar o que vocês têm!

---

##  Começando: Configurando o Ambiente Front-end

Para iniciar sua jornada, primeiro você precisa clonar e rodar este projeto front-end. Ele será sua janela para o multiverso (e a interface que consumirá sua API).

### Pré-requisitos

* **Node.js e npm:** Certifique-se de que você tem o Node.js instalado. Se não tiver, você provavelmente é de uma dimensão onde a tecnologia ainda não foi inventada. [Instale aqui](https://nodejs.org/).

### Passos para a Instalação

1.  **Clone este Repositório:**
    Abra seu terminal e clone este projeto para a sua máquina.

    ```bash
    git clone 'https://github.com/alinetimm/Loja-Interdimensional'
    cd 'Loja-Interdimensional'
    ```

2.  **Instale as Dependências:**
    Ainda no terminal, dentro da pasta do projeto, instale todos os pacotes necessários.

    ```bash
    npm install
    ```

3.  **Execute o Projeto:**
    Inicie o servidor de desenvolvimento do Vite para ver o front-end em ação.

    ```bash
    npm run dev
    ```

    Seu navegador deve abrir automaticamente com o site rodando. Se não abrir, acesse o endereço que aparece no seu terminal (geralmente `http://localhost:5173`).

---

##  Como Usar e Conectar seu Backend

Este front-end foi projetado para ser o "Morty" do seu "Rick" (o seu backend). Ele já sabe o que pedir, mas precisa que você diga **para quem** pedir.

### 1. Entendendo os Pontos de Integração

Ao navegar pelo site, você notará que ao clicar em botões de ação (como "Portal Científico" для login, "Cadastrar" ou "Adicionar ao Carrinho"), um **Guia de Integração** aparecerá em um modal.

Este guia é a sua principal ferramenta! Ele informa:
* O **Endpoint** que o front-end espera que sua API tenha (ex: `POST /cart/add`).
* O **objetivo** da rota.
* Se a rota precisa de **autenticação**.
* Um **exemplo resumido de como usar o MongoDB** para essa tarefa.

Seu trabalho é criar cada uma dessas rotas no seu projeto backend (Node.js/Express) e depois modificar o front-end para chamar sua API de verdade.

### 2. Modificando o Front-end para Chamar sua API

Nos componentes React (dentro de `src/components/`), você encontrará funções de clique que atualmente apenas abrem o modal de instruções. Você deve substituir essa lógica por uma chamada `fetch` (ou `axios`) para a sua API.

**Exemplo Prático: Adicionar ao Carrinho**

Abra o arquivo `src/components/SpecialProducts.jsx`. Você encontrará uma função como esta:

```javascript
// CÓDIGO ORIGINAL (ANTES)
const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setShowCartModal(true); // Apenas abre o modal de instruções
};