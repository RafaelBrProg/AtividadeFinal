const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getProducts, createProduct /*, ...outras*/ } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', [auth, admin], createProduct);
// ... outras rotas PUT e DELETE protegidas por [auth, admin]
// ... rota GET /:id

module.exports = router;