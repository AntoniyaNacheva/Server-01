const Product = require('../models/product');

exports.getAll = () => Product.find({});

exports.getOne = (id) => Product.findById(id);

exports.create = (ownerId, data) => Product.create({ ...data, _ownerId: ownerId });

exports.update = (id, data) => Product.findByIdAndUpdate(id, data);

exports.delete = (id) => Product.findByIdAndDelete(id);