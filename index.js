const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authentication());

app.get('/', (req, res) => {
	res.send('Hello REST API!');
});

app.use(routes);

mongoose.connect(process.env.DB_NAME);

app.listen(3030, () => console.log('Server is listening on port 3030...'));