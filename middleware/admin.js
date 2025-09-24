module.exports = function(req, res, next) {
    if (req.user && req.user.role === 'admin') {
    next();
    } else {
    res.status(403).json({ msg: 'Acesso negado. Nível de acesso de Morty detectado.' });
    }
    };