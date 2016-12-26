// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/*", function (req, res) {
  var params = req.params;
  var input = params['0'];
  console.log(input);
  var myDate = new Date(input);
  var result = {}
  result["unix"] = null;
  result["natural"] = null;
  console.log(myDate);
  if (myDate.toString() !== "Invalid Date") {
    var locale = "en-us"
    var naturalDate = ""
    var month = myDate.toLocaleString(locale, { month: "long" });
    var year = myDate.getFullYear();
    var day = myDate.getDate();
    naturalDate = month + " " + day + ", " + year;
    result["unix"] = myDate.getTime();
    result["natural"] = naturalDate;
    res.json(result)
  }
  else {
    res.json(result)
  }
});