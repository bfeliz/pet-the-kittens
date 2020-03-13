const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");

// serve static content
app.use(express.static("public"));

// parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars as engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/kittens_controller");

// give server access to routes
app.use(routes);

// start the server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
