var express = require('express');
var router = express.Router();
var fs = require('fs');

var lines;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
  	res.json({"words":shuffle(words)});
});


getWords();

module.exports = router;
