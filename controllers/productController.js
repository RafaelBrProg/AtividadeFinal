const Product = require('../models/Product');

// EXEMPLO: (CREATE) POST /products - Apenas para admins
exports.createProduct = async (req, res) => {
  try {
    // 1. Como esta é uma rota de admin, não precisamos verificar quem está criando.
    // O middleware `admin` já fez essa verificação para nós.
    // 2. Crie uma nova instância do modelo Product com os dados do `req.body`.
    const newProduct = new Product(req.body);

    // 3. Salve o novo produto no banco de dados.
    const product = await newProduct.save();

    // 4. Retorne o produto criado com status 201 (Created).
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};

// SUA VEZ: (READ) GET /products - Aberto para todos
exports.getProducts = async (req, res) => {
  try {
    // DICA: Esta é uma rota pública para listar produtos.
    // 1. Você pode opcionalmente verificar `req.query` por filtros, como `category`.
    // Ex: const { category } = req.query;
    const { category } = req.query;

    // 2. Crie um objeto de filtro. Se houver uma categoria, o filtro será `{ category: category }`. Se não, será um objeto vazio `{}`.
    const filterObject = category ? { category: category } : {};

    // 3. Use `Product.find(filterObject)` para buscar os produtos no banco.
    const products = await Product.find(filterObject);

    // 4. Retorne a lista de produtos encontrados em formato JSON.
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};

// (READ) GET /products/:id - Para buscar um único produto
exports.getProductById = async (req, res) => {
  try {
    // 1. Obtenha o id do produto a partir de `req.params`.
    const { id } = req.params;

    // 2. Use `Product.findById(id)` para buscar o produto no banco de dados.
    const product = await Product.findById(id);

    // 3. Se o produto não for encontrado, retorne erro 404.
    if (!product) {
      return res.status(404).send('Produto não encontrado');
    }

    // 4. Se encontrado, retorne o produto com status 200.
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};

// (UPDATE) PUT /products/:id - Para atualizar um produto
exports.updateProduct = async (req, res) => {
  try {
    // 1. Obtenha o id do produto a partir de `req.params`.
    const { id } = req.params;

    // 2. Encontre o produto pelo id e atualize os dados usando `req.body`.
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    // 3. Se o produto não for encontrado, retorne erro 404.
    if (!updatedProduct) {
      return res.status(404).send('Produto não encontrado');
    }

    // 4. Retorne o produto atualizado com status 200.
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};

// (DELETE) DELETE /products/:id - Para excluir um produto
exports.deleteProduct = async (req, res) => {
  try {
    // 1. Obtenha o id do produto a partir de `req.params`.
    const { id } = req.params;

    // 2. Encontre o produto pelo id e exclua-o do banco de dados.
    const deletedProduct = await Product.findByIdAndDelete(id);

    // 3. Se o produto não for encontrado, retorne erro 404.
    if (!deletedProduct) {
      return res.status(404).send('Produto não encontrado');
    }

    // 4. Retorne uma mensagem de sucesso com status 200.
    res.status(200).send('Produto excluído com sucesso');
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
};
