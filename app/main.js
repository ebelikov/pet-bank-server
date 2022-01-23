const express = require('express');
const app = express();
const port = 3000;
const newsRoutes = require('../router/news');

app.use('/api/news', newsRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
