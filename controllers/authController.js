const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// EXEMPLO: (CREATE) POST /users/register
exports.register = async (req, res) => {
    try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
    return res.status(400).json({ msg: 'Um usuário com este e-mail já existe nesta dimensão.' });
    }
    user = new User({ name, email, password });
    await user.save();
    // 5. Enviar uma resposta de sucesso
    res.status(201).json({ msg: 'Usuário registrado com sucesso!' });
    } catch (err) {
    // 6. Se algo der errado, capturar o erro e enviar uma resposta de erro genérica
    res.status(500).send('Erro no servidor');
    }
    };



// POST /auth/login
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Credenciais inválidas.' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Credenciais inválidas.' });
      }
  
      const payload = {
        user: {
          id: user.id,
          role: user.role // Se não tiver o role, remove a linha
        }
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  };