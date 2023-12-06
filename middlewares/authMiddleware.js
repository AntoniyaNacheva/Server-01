const jwt = require('../lib/jsonwebtoken');
require('dotenv').config();

exports.authentication = () => async (req, res, next) => {
	const token = req.header('X-Authorization');

	if (token) {
		try {
			const decodedToken = await jwt.verify(token, process.env.SECRET);

			req.user = decodedToken;

		} catch (err) {

			return res.status(401).json({ ok: false });
		}
	}
	next();
};

