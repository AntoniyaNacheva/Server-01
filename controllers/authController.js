const router = require('express').Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
	const { email, password } = req.body;

	const result = await authService.register(email, password);

	res.json(result);
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const result = await authService.login(email, password);
	res.json(result);
});

router.get('/logout', (req, res) => {
	res.json({ ok: true });
});

module.exports = router;
