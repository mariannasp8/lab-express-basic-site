const express = require("express");
const app = express();

app.use(express.static("public"));
// creating a route:
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/ideas", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/ideas.html");
});

app.get("/dreams", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/dreams.html");
});

app.get("/thoughts", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/thoughts.html");
  });
  
  app.get("/mymovies", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/movies.html");
  });

app.listen(3000, () => console.log("Server running on port 3000"));
