const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const session = require("./routes/api/session");
const push = require("./routes/api/push");
const times = require('./routes/api/times');
const categories = require('./routes/api/categories');
const locations = require('./routes/api/locations');
const bodyParser = require('body-parser');
const passport = require('passport');
const webpush = require('web-push');

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


// app.get("/", (req, res) => res.send("Hello Nigel"));
app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.static('frontend'));

app.use("/api/session", session);
app.use("/api/users", users);
app.use("/api/push", push);
app.use("/api/categories", categories);
app.use("/api/locations", locations);
app.use("/api/times", times);

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webpush.setVapidDetails('mailto:stevielum1@gmail.com', publicVapidKey, privateVapidKey);

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`));