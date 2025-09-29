require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ricknmorty-shop';

mongoose.connect(MONGO_URI)
.then(() => console.log('Conectado ao MongoDB... Wubba Lubba Dub Dub!'))
.catch(err => console.error('Não foi possível conectar ao MongoDB...', err));

// Rotas (vamos adicionar depois)
app.use('/api/users', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/auth', require('./controllers/authController'));
app.use('/api/auth', require('./controllers/cartController'));
app.use('/api/auth', require('./controllers/orderController'));
app.use('/api/auth', require('./controllers/productController'));
app.use('/api/auth', require('./middleware/admin'));
app.use('/api/auth', require('./middleware/auth'));
app.use('/api/auth', require('./middleware/validation'));
app.use('/api/auth', require('./models/Order'));
app.use('/api/auth', require('./models/Product'));
app.use('/api/auth', require('./models/User'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na dimensão ${PORT}`));