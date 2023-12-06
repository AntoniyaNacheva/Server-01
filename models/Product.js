const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	
	type: String,
	description: String,
	price: Number,
	img: String,
	_ownerId: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;