const Joi = require('joi');

const registerSchema = Joi.object({
name: Joi.string().min(3).required(),
email: Joi.string().email().required(),
password: Joi.string().min(6).required()
});

exports.validateRegister = (req, res, next) => {
const { error } = registerSchema.validate(req.body);
if (error) {
return res.status(400).json({ msg: error.details[0].message });
}
next();
};

// Use na sua rota: router.post('/register', validateRegister, register);