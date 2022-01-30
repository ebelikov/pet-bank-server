const express = require('express');
const config = require('config');
const app = express();
const port = config.get('PORT') || 3000;
const newsRoutes = require('../router/news');
const corsMiddleware = require('../middleware/cors');

app.use(corsMiddleware);

app.use('/api/news', newsRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
