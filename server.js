var express = require('express');
var app = express();

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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
