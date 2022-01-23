const express = require('express');
const app = express();
const port = 3000;
const newsRoutes = require('../router/news');
const cors = require('cors');

//TODO: move to separate middleware
const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:8080',
];

app.use(cors({
	origin: function(origin, callback) {
		if (!origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

		return callback(new Error(msg), false);
	},
}));

app.use('/api/news', newsRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
