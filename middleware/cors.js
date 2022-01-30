const cors = require('cors');

const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:8080',
];

module.exports = cors({
	origin: function(origin, callback) {
		if (!origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

		return callback(new Error(msg), false);
	},
});
