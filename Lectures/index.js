const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs"); // we will render the res in the case of ejs
});

app.get("/helo", (req, res) => {
  res.send("hellow");
});

app.get("/rolldice", (req, res) => {
  const diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
  const followers = ["steve", "tony", "natasha", "Dr.Banner", "Thor", "clint"];
  const username = req.params.username;
  res.render("ig.ejs", { username, followers });
});

// json data
app.get("/json/:name", (req, res) => {
  const name = req.params.name;
  const jsonData = require("./data.json");
  const userData = jsonData[name];
  if (userData) {
    res.render("jsonData.ejs", { name, userData });
  } else {
    res.render("error.ejs", { error: "404 No Such account" });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server listning on http://localhost:${PORT} `);
});
