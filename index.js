const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/html/full-width.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/html/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/html/contact.html");
});


app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
