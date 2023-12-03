const router = require('express').Router();

router.post('/register', async (req, res) => {
	const { email, password, rePass } = req.body;

	const token = await authService.register(email, password, rePass);

	res.cookie('auth', token);
});

router.post('/login', (req, res) => {

});

router.get('/logout', (req, res) => {

});

module.exports = router;
