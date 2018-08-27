const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose.connect(db)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello Nigel"));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`));