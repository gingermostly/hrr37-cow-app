const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Cow = require('./models/cows');
const mongoDb = require('./db/app.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.static(path.join(__dirname, '/dist')));

app.post("/cows", (req, res, next) => {
  // send new cow to mongoDb
  const newCow = new Cow({name: req.body.name, description: req.body.description})
  newCow.save();
  res.redirect('/');
  res.end()
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
 });

 app.get("/cows", (req, res)=> {

 });

app.listen(port, () => console.log(`Listening on port ${port}!`))
