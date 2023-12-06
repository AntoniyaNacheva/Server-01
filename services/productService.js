const Product = require('../models/product');

exports.getAll = (ownerId) => {
	const filter = ownerId ? { _ownerId: ownerId } : {};

	return Product.find(filter);
};

exports.getOne = (id) => Product.findById(id);

exports.create = (ownerId, data) => Product.create({ ...data, _ownerId: ownerId });

exports.update = (id, data) => Product.findByIdAndUpdate(id, data);

exports.delete = (id) => Product.findByIdAndDelete(id);