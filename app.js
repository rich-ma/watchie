const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const db = require('./config/keys.js').mongoURI;
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

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

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

const User = require('./models/User');

setInterval(() => {
  const date = new Date();
  if (date.getHours() <= 20 && date.getHours() >= 8) {
    User.find()
    .then(users => {
      users.forEach(user => {
        if (user.subscription) {
          const subscription = JSON.parse(user.subscription);
          
          const payload = JSON.stringify({
            title: "Watchie",
            fname: user.fname
          });
          
          webpush.sendNotification(subscription, payload)
          .catch(err => {
            // console.log(err);
          });
        }
      });
    });
    console.log("Sent notifications on", date.toString());
  }
}, 60000);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.use(express.static('frontend'));
  app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));