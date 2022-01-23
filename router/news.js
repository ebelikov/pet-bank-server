const express = require('express');
const router = express.Router();

const news = require('../model/news');

const newsList = news.map((newsArticle) => {
	const { id, title, date } = newsArticle;

	return { id, title, date };
});

// router.use(function timeLog (req, res, next) {
// 	next();
// });

router.get('/list', function (req, res) {
	res.json(newsList);
});

router.get('/article/:id', function(req, res) {

	const article = news.find((article) => {
		return article?.id === Number(req.params.id);
	});

	if (article) {
		res.json(article);
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;
