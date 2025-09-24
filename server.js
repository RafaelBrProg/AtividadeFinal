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
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na dimensão ${PORT}`));