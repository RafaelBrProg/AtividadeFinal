Loja Interdimensional - O E-commerce BackendWubba Lubba Dub Dub, cientistas! Bem-vindos à sua mais nova aventura interdimensional, sancionada pelo próprio Conselho dos Ricks.Sua missão, caso decidam não ser um Jerry e aceitá-la, é construir o motor por trás deste portal de e-commerce. O front-end já foi estabilizado e retirado de uma dimensão onde tudo é feito em React (uma dimensão bem esquisita, na verdade). Agora, cabe a vocês construir a parte inteligente da operação: a API backend que vai gerenciar usuários, produtos exóticos como Plumbus e Sementes de Mega Árvores, e garantir que nossos clientes possam finalizar seus pedidos sem "cronenbergar" o nosso estoque.Preparem suas Pistolas de Portais, pois é hora de mostrar o que vocês têm!⚙️ Começando: Configurando o Ambiente Front-endPara iniciar sua jornada, primeiro você precisa clonar e rodar este projeto front-end. Ele será sua janela para o multiverso (e a interface que consumirá sua API).Pré-requisitosNode.js e npm: Certifique-se de que você tem o Node.js instalado. Se não tiver, você provavelmente é de uma dimensão onde a tecnologia ainda não foi inventada. Instale aqui.Passos para a InstalaçãoClone este Repositório:Abra seu terminal e clone este projeto para a sua máquina.git clone [URL_DO_REPOSITORIO]
cd [NOME_DA_PASTA_DO_PROJETO]
Instale as Dependências:Ainda no terminal, dentro da pasta do projeto, instale todos os pacotes necessários.npm install
Execute o Projeto:Inicie o servidor de desenvolvimento do Vite para ver o front-end em ação.npm run dev
Seu navegador deve abrir automaticamente com o site rodando. Se não abrir, acesse o endereço que aparece no seu terminal (geralmente http://localhost:5173).🔗 Como Usar e Conectar seu BackendEste front-end foi projetado para ser o "Morty" do seu "Rick" (o seu backend). Ele já sabe o que pedir, mas precisa que você diga para quem pedir.1. Entendendo os Pontos de IntegraçãoAo navegar pelo site, você notará que ao clicar em botões de ação (como "Portal Científico" para login, "Cadastrar" ou "Adicionar ao Carrinho"), um Guia de Integração aparecerá em um modal.Este guia é a sua principal ferramenta! Ele informa:O Endpoint que o front-end espera que sua API tenha (ex: POST /cart/add).O objetivo da rota.Se a rota precisa de autenticação.Um exemplo resumido de como usar o MongoDB para essa tarefa.Seu trabalho é criar cada uma dessas rotas no seu projeto backend (Node.js/Express) e depois modificar o front-end para chamar sua API de verdade.2. Modificando o Front-end para Chamar sua APINos componentes React (dentro de src/components/), você encontrará funções de clique que atualmente apenas abrem o modal de instruções. Você deve substituir essa lógica por uma chamada fetch (ou axios) para a sua API.Exemplo Prático: Adicionar ao CarrinhoAbra o arquivo src/components/SpecialProducts.jsx. Você encontrará uma função como esta:// CÓDIGO ORIGINAL (ANTES)
const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setShowCartModal(true); // Apenas abre o modal de instruções
};
Você deve modificá-la para fazer a chamada à sua API, assim:// SUA IMPLEMENTAÇÃO (DEPOIS)
const API_BASE_URL = 'http://localhost:5000/api'; // Dica: coloque isso em um arquivo de configuração!

const handleAddToCartClick = async (product) => {
    try {
        // Lembre-se de pegar o token JWT do localStorage se a rota for protegida!
        // const token = localStorage.getItem('token');

        const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}` // Descomente para rotas protegidas
            },
            body: JSON.stringify({ productId: product.id, quantity: 1 })
        });

        if (!response.ok) {
            throw new Error('Oh, geez, Rick! A API retornou um erro.');
        }

        const updatedCart = await response.json();
        console.log('Carrinho atualizado:', updatedCart);
        alert(`${product.name} foi adicionado ao seu carrinho quântico!`);

    } catch (error) {
        console.error("Wubba Lubba Dub Dub! Algo deu errado:", error);
        alert("Aconteceu um erro. Tente novamente ou abra um portal para outra dimensão.");
    }
};
Repita esse processo para todas as funcionalidades interativas: Login, Cadastro e Visualizar Carrinho. Materiais de Apoio DimensionalPerdido em alguma dimensão? Não se preocupe! Toda a documentação necessária para completar sua missão está disponível no próprio site.Guia Completo da Atividade: Na seção "Sua Missão Interdimensional", você encontrará um botão que abre o PDF com todos os detalhes da tarefa.Aulas Anteriores: Na seção "Materiais de Estudo", você pode revisar o conteúdo de todas as aulas de backend para refrescar sua memória.Importante: Para que os links dos PDFs funcionem, certifique-se de que todos os arquivos (guiacompleto.pdf, etc.) estão na pasta public do seu projeto front-end.Agora chega de conversa. Get Schwifty e comece a codificar!