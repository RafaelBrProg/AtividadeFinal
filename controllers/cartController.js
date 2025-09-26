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
        // 1. Encontre o usuário pelo ID vindo de `req.user.id`.
        const foundUser = await User.findById(req.user.id)
            // 2. Usando .populate() para obter os detalhes completos do produto (nome, preço, etc.) no carrinho.
            .populate('cart.product'); // "cart.product" é um campo referenciado, então populate vai buscar os dados completos do produto.

        // 3. Retorne o `user.cart` populado como resposta.
        res.json(foundUser.cart);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

// UPDATE: (UPDATE) PUT /cart/update/:productId
exports.updateCartItem = async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    try {
        // 1. Encontre o usuário logado
        const user = await User.findById(req.user.id);

        // 2. Verifique se o produto existe no carrinho
        const itemIndex = user.cart.findIndex(p => p.product == productId);
        if (itemIndex === -1) {
            return res.status(404).send('Produto não encontrado no carrinho');
        }

        // 3. Atualize a quantidade do produto no carrinho
        user.cart[itemIndex].quantity = quantity;

        // 4. Salve as alterações no carrinho
        await user.save();
        res.json(user.cart);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

// DELETE: (DELETE) DELETE /cart/remove/:productId
exports.removeCartItem = async (req, res) => {
    const { productId } = req.params;

    try {
        // 1. Encontre o usuário logado
        const user = await User.findById(req.user.id);

        // 2. Verifique se o produto existe no carrinho
        const itemIndex = user.cart.findIndex(p => p.product == productId);
        if (itemIndex === -1) {
            return res.status(404).send('Produto não encontrado no carrinho');
        }

        // 3. Remova o produto do carrinho
        user.cart.splice(itemIndex, 1);

        // 4. Salve as alterações no carrinho
        await user.save();
        res.json(user.cart);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};
