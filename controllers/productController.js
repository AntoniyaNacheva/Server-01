const router = require('express').Router();

const productService = require('../services/productService');

router.get('/', async (req, res) => {
	const ownerId = req.query.where ? req.query.where.match(/"([^"]+)"/)[1] : '';

	const products = await productService.getAll(ownerId);

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

router.put('/:productId', async (req, res) => {

	const data = req.body;

	await productService.update(req.params.productId, data);

	res.json({ data });
});

router.delete('/:productId', async (req, res) => {

	await productService.delete(req.params.productId);

	res.json({ ok: true });
});

module.exports = router;