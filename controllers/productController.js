const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');
const { verifyToken, isAdmin } = require('../middleware/auth');

// (CREATE) POST /products - Apenas para admins
exports.createProduct = [
  // Validação
  body('name').notEmpty().withMessage('Nome do produto é obrigatório'),
  body('price').isFloat({ min: 0 }).withMessage('Preço deve ser um número positivo'),

  // Função de criação
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // 1. Como esta é uma rota de admin, o middleware `isAdmin` já fez essa verificação para nós.
      const newProduct = new Product(req.body);

      // 2. Salve o novo produto no banco de dados.
      const product = await newProduct.save();

      // 3. Retorne o produto criado com status 201 (Created).
      res.status(201).json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro no servidor', message: err.message });
    }
  }
];

// (READ) GET /products - Aberto para todos, com paginação e filtros
exports.getProducts = async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;

    // Filtro para categoria
    const filterObject = category ? { category: category } : {};

    // Paginação: pula os primeiros (page - 1) * limit produtos e limita a quantidade
    const products = await Product.find(filterObject)
                                  .skip((page - 1) * limit)
                                  .limit(Number(limit));

    // Retorna a lista de produtos encontrados
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor', message: err.message });
  }
};

// (READ) GET /products/:id - Para buscar um único produto
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Encontre o produto pelo ID
    const product = await Product.findById(id);

    // 2. Se o produto não for encontrado, retorne erro 404
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // 3. Retorne o produto com status 200
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor', message: err.message });
  }
};

// (UPDATE) PUT /products/:id - Para atualizar um produto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Encontre o produto pelo ID e atualize
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    // 2. Se o produto não for encontrado, retorne erro 404
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // 3. Retorne o produto atualizado com status 200
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor', message: err.message });
  }
};

// (DELETE) DELETE /products/:id - Para excluir um produto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Encontre o produto pelo ID e exclua
    const deletedProduct = await Product.findByIdAndDelete(id);

    // 2. Se o produto não for encontrado, retorne erro 404
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // 3. Retorne uma mensagem de sucesso com o nome do produto
    res.status(200).json({ message: `Produto ${deletedProduct.name} excluído com sucesso` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor', message: err.message });
  }
};

// Middleware para verificação de autenticação e autorização de admin
exports.isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: 'Acesso negado: Usuário não autorizado' });
  }
  next();
};

// Middleware para verificar se o usuário está autenticado
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Verifique e decodifique o token aqui
  // Se o token for válido, coloque o usuário no req.user
  next();
};
