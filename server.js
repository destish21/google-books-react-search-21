const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);

// Connect to the Mongo DB
const url = process.env.MONGODB_URI 
mongoose.connect(url, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  },() =>console.log('db connected'));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
