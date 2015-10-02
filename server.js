var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
app.get("/", function (req, res) {
	res.send("hello universe!");
});

var Adjective = function () {
	this.happy = true;
	this.strong = true;
	this.evil = true;
	this.armed = true;
}

var adjective = new Adjective();

function getRandomWord (object) {
	var propArray = Object.keys(object);
	var randomProp = propArray [Math.floor(Math.random()*propArray.length)];
	return {word:randomProp};
}

app.get('/adjective', function(req, res) { 
	res.json(getRandomWord(adjective));
});



