const Product = require('../models/product');

exports.getAll = () => Product.find({});

exports.create = (data) => Product.create(data);