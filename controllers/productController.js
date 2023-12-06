const router = require('express').Router();

const productService = require('../services/productService');

router.get('/', async (req, res) => {
	const products = await productService.getAll();

	res.json(products);
});

router.post('/', async (req, res) => {
	const data = req.body;

	const product = await productService.create(data);

	res.json({ _id: product._id });
});

module.exports = router;