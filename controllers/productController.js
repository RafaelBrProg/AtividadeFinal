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
// 2. Crie um objeto de filtro. Se houver uma categoria, o filtro será `{ category: category }`. Se não, será um objeto vazio `{}`.
// 3. Use `Product.find(filterObject)` para buscar os produtos no banco.
// 4. Retorne a lista de produtos encontrados em formato JSON.
} catch (err) {
res.status(500).send('Erro no servidor');
}
};
// Adicione aqui as outras funções do CRUD para produtos.
// exports.getProductById = async (req, res) => { ... }
// exports.updateProduct = async (req, res) => { ... }
// exports.deleteProduct = async (req, res) => { ... }