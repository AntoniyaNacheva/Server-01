const router = require('express').Router();

const productService = require('../services/productService');

router.get('/', async (req, res) => {
	const products = await productService.getAll();

	res.json(products);
});

router.get('/:productId', async (req, res) => {
	const product = await productService.getOne(req.params.productId);

	res.json(product);
});

router.post('/', async (req, res) => {
	const data = req.body;

	const product = await productService.create(req.user._id, data);

	res.json({ _id: product._id });
});

module.exports = router;