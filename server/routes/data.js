var express = require('express');
var router = express.Router();
var fs = require('fs');

var lines;

function getWords(length) {
	fs.readFile(require('path').resolve(__dirname, '../data/words.txt'), (err, data) => {
  		if (err) throw err;
  		else {
			lines = data.toString().split('\n');
			
  		}
	});
}


router.get('/words', function(req, res, next) {
	const length = req.query.length
	let words = [];

	words = lines.slice(0,300).filter((ele) => {
		if (ele.length==length)  {
			return true;
		}
		return false;
	});
  	res.json({"words":words});
});


getWords();

module.exports = router;
