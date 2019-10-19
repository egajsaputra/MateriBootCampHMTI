var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var PORT = 8000;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

app.listen(PORT, function() {
  console.log("Server Running on PORT" + PORT);
});
