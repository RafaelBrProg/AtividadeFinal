const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
products: [{
productId: { type: String, required: true },
name: { type: String, required: true },
price: { type: Number, required: true },
quantity: { type: Number, required: true }
}],
total: { type: Number, required: true },
status: { type: String, default: 'Processando' },
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);