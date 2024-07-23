//path
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// Import routes
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop"); // Ensure this file exists
const error404Controller = require("./controllers/error")

const app = express();


app.set("view engine", "ejs");
app.set("views", "./views");


// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //for use public folder

// Use the routes
app.use("/admin", adminRoute);
app.use(shopRoute);

/////Add 404 error Page
app.use(error404Controller.err404);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
