const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');

const SECRET = 'kdsak5665sdd';

exports.login = async (email, password) => {
	const user = await this.findByEmail(email);

	if (!user) {
		throw new Error('Invalid email or password!');
	}

	const isValid = await bcrypt.compare(password, user.password);

	if (!isValid) {
		throw new Error('Invalid email or password!');
	}

	const payload = {
		_id: user._id,
		email
	};

	const token = await jwt.sign(payload, SECRET);

	return token;
}

exports.register = async (email, password, rePass) => {
	if (password !== rePass) {
		throw new Error('Password missmatch!');
	}

	const existingUser = await User.findOne({
		$or: [
			{ email }
		]
	});

	if (existingUser) {
		throw new Error('User exists!');
	}

	if (password.length < 4) {
		throw new Error('Password is too short!');
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await User.create({ email, password: hashedPassword });

	return this.login(email, password);
}