const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

// EXEMPLO: (CREATE) POST /orders
exports.createOrder = async (req, res) => {
try {
// 1. Busque o usuário e popule os produtos do carrinho para ter acesso aos detalhes (preço, estoque, etc.).
const user = await User.findById(req.user.id).populate('cart.product');
if (user.cart.length === 0) {
return res.status(400).json({ msg: 'Seu carrinho está vazio, seu Morty!' });
}

let total = 0;
// 2. Crie um array com os produtos formatados para o pedido, copiando os dados, e calcule o total.
const orderProducts = user.cart.map(item => {
// DICA para o aluno: Aqui é um bom lugar para verificar o estoque (`item.product.stock`).
total += item.quantity * item.product.price;
return {
productId: item.product.id,
name: item.product.name,
price: item.product.price,
quantity: item.quantity
};
});

// 3. Crie uma nova instância do modelo Order.
const order = new Order({
user: req.user.id,
products: orderProducts,
total
});

// 4. Salve o novo pedido.
await order.save();

// 5. Limpe o carrinho do usuário e salve a alteração.
user.cart = [];
await user.save();
// DICA para o aluno: Aqui você também deve decrementar o estoque dos produtos vendidos.

res.status(201).json(order);
} catch (err) {
res.status(500).send('Erro no servidor');
}
};

// SUA VEZ: (READ) GET /orders
// Crie a função para buscar todos os pedidos do usuário logado.
exports.getUserOrders = async (req, res) => {
    try {
      // 1. Busque os pedidos do usuário logado. Vamos usar o ID do usuário para filtrar os pedidos.
      const orders = await Order.find({ user: req.user.id }).populate('products.productId');
  
      // 2. Se não houver pedidos, envie uma mensagem indicando que o usuário ainda não fez pedidos.
      if (!orders || orders.length === 0) {
        return res.status(404).json({ msg: 'Você ainda não fez nenhum pedido.' });
      }
  
      // 3. Se houver pedidos, retorne os pedidos encontrados.
      res.status(200).json(orders);
    } catch (err) {
      // Caso ocorra algum erro no processo, envie uma mensagem de erro.
      res.status(500).send('Erro no servidor');
    }
  };