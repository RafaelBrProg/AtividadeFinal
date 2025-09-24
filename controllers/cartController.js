const User = require('../models/User');

// EXEMPLO: (CREATE/UPDATE) POST /cart/add
exports.addToCart = async (req, res) => {
// 1. Extraia o ID do produto e a quantidade do corpo da requisição.
const { productId, quantity } = req.body;
try {
// 2. Encontre o usuário logado usando o ID que o middleware `auth` adicionou em `req.user.id`.
const user = await User.findById(req.user.id);

// 3. Verifique se o produto já existe no carrinho do usuário.
const itemIndex = user.cart.findIndex(p => p.product == productId);

if (itemIndex > -1) {
// 4a. Se o item já existe, apenas some a nova quantidade.
user.cart[itemIndex].quantity += quantity;
} else {
// 4b. Se não existe, adicione o novo produto e quantidade ao array do carrinho.
user.cart.push({ product: productId, quantity });
}

// 5. Salve as alterações no documento do usuário.
await user.save();
res.json(user.cart);
} catch (err) {
res.status(500).send('Erro no servidor');
}
};

// SUA VEZ: (READ) GET /cart
exports.getCart = async (req, res) => {
try {
// DICA: Esta rota deve retornar os itens do carrinho do usuário logado com todos os detalhes dos produtos.
// 1. Encontre o usuário pelo ID vindo de `req.user.id`.
// 2. Para obter os detalhes completos de cada produto (nome, preço, etc.) em vez de apenas o ID,
// use o método `.populate()` do Mongoose na sua busca.
// Ex: await User.findById(req.user.id).populate('cart.product');
// 3. Retorne o `user.cart` populado como resposta.
} catch (err) {
res.status(500).send('Erro no servidor');
}
};

// Adicione aqui as outras funções do CRUD para o carrinho:
// exports.updateCartItem = async (req, res) => { ... }
// exports.removeCartItem = async (req, res) => { ... }